/* The Property class represents a property listing with various attributes and methods. */
class Property {
    constructor() {
        this.__typename = "";
        this.property_id = "";
        this.listing_id = "";
        this.plan_id = "";
        this.status = "";
        this.photo_count = 0;
        this.branding = [];
        this.location = {}; // Assuming Location is an object
        this.open_houses = []; // Assuming OpenHouse is an array
        this.description = null;
        this.virtual_tours = [];
        this.matterport = false;
        this.advertisers = [];
        this.flags = null;
        this.source = null;
        this.pet_policy = null;
        this.community = null;
        this.primary_photo = null;
        this.href = null;
        this.list_price = null;
        this.list_price_min = null;
        this.list_price_max = null;
        this.price_reduced_amount = null;
        this.estimate = null;
        this.lead_attributes = null;
        this.last_sold_date = null;
        this.list_date = null;
        this.products = null;
        this.last_sold_price = null;
        this.color = "";
    }
}

export default Property;