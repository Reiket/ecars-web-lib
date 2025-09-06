import {act, renderHook} from '@testing-library/react';
import {beforeEach, describe, expect, vi} from 'vitest';
import {useMatchMedia} from '@/services/hooks/useMatchMedia';
import {useDropdown} from '@/services/hooks/useDropdown';
import {dropdownOptionsMock} from '@/services/mocks';

vi.mock('@/services/hooks/useMatchMedia', () => ({
  useMatchMedia: vi.fn(),
}));

const mockedUseMatchMedia = vi.mocked(useMatchMedia);
const firstMockOption = dropdownOptionsMock[0];
const secondMockOption = dropdownOptionsMock[1];
describe('useDropdown', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('returns the first option as selected by default', () => {
    mockedUseMatchMedia.mockReturnValue(false);
    const {result} = renderHook(() => useDropdown(dropdownOptionsMock));

    expect(result.current.selectedOption).toEqual(firstMockOption);
    expect(result.current.isDropdownOpen).toBe(false);
  });
  test('handleOpenClick does nothing when pointer is not coarse', () => {
    mockedUseMatchMedia.mockReturnValue(false);
    const {result} = renderHook(() => useDropdown(dropdownOptionsMock));

    act(() => {
      result.current.handleOpenClick();
    });

    expect(result.current.isDropdownOpen).toBe(false);
  });
  test('handleOpenClick toggles isDropdownOpen when pointer is coarse', () => {
    mockedUseMatchMedia.mockReturnValue(true);
    const {result} = renderHook(() => useDropdown(dropdownOptionsMock));

    act(() => {
      result.current.handleOpenClick();
    });
    expect(result.current.isDropdownOpen).toBe(true);

    act(() => {
      result.current.handleOpenClick();
    });
    expect(result.current.isDropdownOpen).toBe(false);
  });
  test('handleOutside sets isDropdownOpen correctly', () => {
    mockedUseMatchMedia.mockReturnValue(true);
    const {result} = renderHook(() => useDropdown(dropdownOptionsMock));

    act(() => {
      result.current.handleOutside(true);
    });
    expect(result.current.isDropdownOpen).toBe(true);

    act(() => {
      result.current.handleOutside(false);
    });
    expect(result.current.isDropdownOpen).toBe(false);
  });

  test('handleSelect updates selectedOption and closes dropdown when coarse', () => {
    mockedUseMatchMedia.mockReturnValue(true);
    const {result} = renderHook(() => useDropdown(dropdownOptionsMock));

    act(() => {
      result.current.handleSelect(secondMockOption);
    });

    expect(result.current.selectedOption).toEqual(secondMockOption);
    expect(result.current.isDropdownOpen).toBe(false);
  });

  test('handleSelect updates selectedOption but does not close dropdown when not coarse', () => {
    mockedUseMatchMedia.mockReturnValue(false);
    const {result} = renderHook(() => useDropdown(dropdownOptionsMock));

    act(() => {
      result.current.handleSelect(secondMockOption);
    });

    expect(result.current.selectedOption).toEqual(secondMockOption);
    expect(result.current.isDropdownOpen).toBe(false);
  });
});
