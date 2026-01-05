"use client"

import { useEffect, useCallback } from 'react';
import { theme as themeUtils } from '@/utils';
import { useThemeStore } from '@/store/theme';

function ThemeValidator() {

    const theme = useThemeStore((state) => state.theme);

    const validateTheme = useCallback(() => {
        themeUtils.applyTheme(theme);
    }, [theme])
    
    useEffect(() => {
        validateTheme();
    }, [validateTheme, theme]);

    return null;
};

export default ThemeValidator;