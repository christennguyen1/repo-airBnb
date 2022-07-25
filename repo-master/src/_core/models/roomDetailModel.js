export class RoomDetailModel {
  _id = "";
  name = "";
  guests = "";
  bedRoom = "";
  bath = "";
  description = "";
  price = "";
  elevator = "";
  hotTub = "";
  pool = "";
  dryer = "";
  gym = "";
  kitchen = "";
  wifi = "";
  heating = "";
  cableTV = "";
  locationId = new LocationIdModel();
  image = "";
}

export class LocationIdModel {
  name = "";
  province = "";
  country = "";
  valuate = "";
  image = "";
}
