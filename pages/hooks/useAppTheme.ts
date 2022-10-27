import { useTheme } from '@emotion/react';
import type { AppTheme } from '../../styles/theme';

function useAppTheme(): AppTheme {
  return useTheme() as AppTheme;
}

export default useAppTheme;
