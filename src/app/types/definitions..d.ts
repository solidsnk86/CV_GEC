export interface GeolocationProps {
  ip: string;
  city: {
    name: string;
    postalCode: string;
  };
  country: {
    name: string;
    emojiFlag: string;
  };
  coords: {
    latitude: string;
    longitude: string;
  };
}

export interface DBLocationProps {
  id: number;
  ip_address: string;
  latitude: number;
  longitude: number;
  postal_code: string;
  city_name: string;
  country_name: string;
  country_flag: string;
  created_at: Date;
}
