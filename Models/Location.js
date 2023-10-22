class Location {
    lat
    long
    name

    constructor(location, lat, long, name) {
        this.lat = location?.geometry?.location?.lat() ?? lat ?? 0
        this.long = location?.geometry?.location?.lng() ?? long ?? 0
        this.name = location?.name ?? name ?? ""
    }

  
}

export default Location;