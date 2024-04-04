import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";
import { address } from 'src/assets/src/translations/en/address';
import { cart } from 'src/assets/src/translations/en/cart';
import { common } from 'src/assets/src/translations/en/common';
import { myAccount } from 'src/assets/src/translations/en/my-account';
import { payment } from 'src/assets/src/translations/en/payment';
import { product } from 'src/assets/src/translations/en/product';
import { user } from 'src/assets/src/translations/en/user';


export const translationOverwrites = {
  en:
   {
     common: common,
     cart: cart,
     address: address,
     myaccount: myAccount,
     user: user,
     product: product,
     payment: payment,
    },
};

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/',
        }
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {
        currency: ['USD'], 
        language: ['en'], 
        baseSite: ['electronics-spa'],
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
    }),
    provideConfig({
      i18n: { resources: translationOverwrites },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '4.3'
      }
    })
  ]
})
export class SpartacusConfigurationModule { }
