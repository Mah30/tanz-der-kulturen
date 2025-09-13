// Coment.: Mostra o texto traduzido e o LanguageSwitcher. Pode fechar o menu mobile ao trocar idioma.

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const I18nControls = ({onChangedLanguage, textAs = 'p'}) => {
    const { t } = useTranslation('common');
    const TextTag = textAs;

    return (
        <div className="flex items-center gap-3">
      {/* Coment.: Evite <h1> aqui para não conflitar com o H1 da página */}
            <TextTag className="text-sm text-[#027D8F]">{t('intro')}</TextTag>
            <LanguageSwitcher onChangedLanguage={onChangedLanguage} />
        </div>

    )

}  
    
export default I18nControls;

  