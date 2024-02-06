import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/ErrorPage';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            {t('Main page')}
        </div>
    );
};

export default MainPage;
