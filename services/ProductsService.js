const PRODUCTS = [
    {
        id: 100,
        name: 'ARMY DRY FIT TEE',
        price: 3.95,
        image: require('../assets/army_tee_admin.jpeg'), resizeMode: "cover",
        description: 'SAF army dry fit tees are Khaki Green in colour and is widely utilized within the Singapore Army. Made out of Dryfit.' ,
        location_1 : 'The Chervrons (Jurong East)',
        location_1_desc : '48 Boon Lay Way, Singapore 609961',
        location_1_timing: 'Mon, Wed – Sun: 1100 – 2100 hrs',
        location_1_stock: 3,
        location_2: 'SAFRA Punggol',
        location_2_desc : '9 Sentul Cres, Singapore 828654',
        location_2_timing: 'Mon, Wed – Sun: 1100 – 2100 hrs',
        location_2_stock: 5
    },
    {
        id: 101,
        name: 'ARMY RUNNING VEST (CSSCOM)',
        price: 7.65,
        image: require('../assets/csscom_shirt.jpeg'), resizeMode: "cover",
        description: 'CSSCOM Blue Singlet Vest. Suitable for daily workout running. Made out of Dryfit.',
        location_1 : 'The Chervrons (Jurong East)',
        location_1_desc : '48 Boon Lay Way, Singapore 609961',
        location_1_timing: 'Mon, Wed – Sun: 1100 – 2100 hrs',
        location_1_stock: 10,
        location_2: 'SAFRA Punggol',
        location_2_desc : '9 Sentul Cres, Singapore 828654',
        location_2_timing: 'Mon, Wed – Sun: 1100 – 2100 hrs',
        location_2_stock: 8
    },
    {
        id: 102,
        name: 'ARMY RUNNING VEST (OCS)',
        price: 7.65,
        image: require('../assets/ocs_shirt.jpeg'), resizeMode: "cover",
        description: 'OCS army running vest. Suitable for daily workout running. Made out of Dryfit.',
        location_1 : 'The Chervrons (Jurong East)',
        location_1_desc : '48 Boon Lay Way, Singapore 609961',
        location_1_timing: 'Mon, Wed – Sun: 1100 – 2100 hrs',
        location_1_stock: 4,
        location_2: 'SAFRA Punggol',
        location_2_desc : '9 Sentul Cres, Singapore 828654',
        location_2_timing: 'Mon, Wed – Sun: 1100 – 2100 hrs',
        location_2_stock: 7
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}