import type { Struct, Schema } from '@strapi/strapi';

export interface LocationMarkLocationMark extends Struct.ComponentSchema {
  collectionName: 'components_location_mark_location_marks';
  info: {
    displayName: 'Location-Mark';
    icon: 'pinMap';
  };
  attributes: {
    location: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::geodata.geojson',
        {
          info: true;
        }
      >;
    datetime: Schema.Attribute.DateTime;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'location-mark.location-mark': LocationMarkLocationMark;
    }
  }
}
