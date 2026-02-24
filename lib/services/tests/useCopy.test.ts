import {act, renderHook} from '@testing-library/react';
import {afterEach, beforeEach, describe, expect, test, vi} from 'vitest';
import {useCopy} from '@/services/hooks/useCopy';

const mockWriteText = vi.fn();
Object.assign(navigator, {
  clipboard: {
    writeText: mockWriteText,
  },
});

const TEST_TEXT = 'Hello World';

const copyTestCases = [
  {isSuccess: true, expectedIsCopied: true},
  {isSuccess: false, expectedIsCopied: false},
];

describe('useCopy', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
    mockWriteText.mockResolvedValue(undefined);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('returns initial state correctly', () => {
    const {result} = renderHook(() => useCopy());
    expect(result.current.isCopied).toBe(false);
  });

  copyTestCases.forEach(({isSuccess, expectedIsCopied}) => {
    test(`handles clipboard write correctly when success is ${String(isSuccess)}`, async () => {
      if (!isSuccess) {
        mockWriteText.mockRejectedValueOnce(new Error('Clipboard error'));
      }

      const {result} = renderHook(() => useCopy());

      await act(async () => {
        await result.current.copy(TEST_TEXT);
      });

      expect(mockWriteText).toHaveBeenCalledWith(TEST_TEXT);
      expect(result.current.isCopied).toBe(expectedIsCopied);
    });
  });

  test('resets isCopied to false after the default interval (5000ms)', async () => {
    const {result} = renderHook(() => useCopy());

    await act(async () => {
      await result.current.copy(TEST_TEXT);
    });

    expect(result.current.isCopied).toBe(true);

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(result.current.isCopied).toBe(false);
  });

  test('resets isCopied to false after a custom resetInterval', async () => {
    const customInterval = 2000;
    const {result} = renderHook(() => useCopy({resetInterval: customInterval}));

    await act(async () => {
      await result.current.copy(TEST_TEXT);
    });

    act(() => {
      vi.advanceTimersByTime(customInterval);
    });

    expect(result.current.isCopied).toBe(false);
  });

  test('clears timeout if component unmounts', async () => {
    const {result, unmount} = renderHook(() => useCopy());

    await act(async () => {
      await result.current.copy(TEST_TEXT);
    });

    unmount();

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(result.current.isCopied).toBe(true);
  });
});
