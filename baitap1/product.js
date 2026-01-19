/**
 * Constructor function để tạo đối tượng Product
 * Câu 1: Khai báo constructor function Product
 */
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

/**
 * Câu 2: Khởi tạo mảng products gồm ít nhất 5 sản phẩm, 
 * thuộc tối thiểu 2 danh mục khác nhau
 */
function initializeProducts() {
  return [
    new Product(1, 'Laptop Dell XPS', 1200, 5, 'Electronics', true),
    new Product(2, 'iPhone 15 Pro', 999, 0, 'Electronics', true),
    new Product(3, 'Áo thun nam', 25, 30, 'Clothing', true),
    new Product(4, 'Tai nghe AirPods', 150, 10, 'Accessories', true),
    new Product(5, 'Quần jean', 45, 15, 'Clothing', true),
    new Product(6, 'Balo laptop', 60, 8, 'Accessories', false),
    new Product(7, 'Chuột không dây', 30, 0, 'Accessories', true)
  ];
}

/**
 * Câu 3: Tạo mảng mới chỉ chứa name và price của mỗi sản phẩm
 */
function getProductNameAndPrice(products) {
  return products.map(product => ({
    name: product.name,
    price: product.price
  }));
}

/**
 * Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
 */
function getProductsInStock(products) {
  return products.filter(product => product.quantity > 0);
}

/**
 * Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30 hay không
 */
function hasProductPriceAbove30(products) {
  return products.some(product => product.price > 30);
}

/**
 * Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" 
 * có đang được bán (isAvailable = true) hay không
 */
function areAllAccessoriesAvailable(products) {
  const accessories = products.filter(product => product.category === 'Accessories');
  if (accessories.length === 0) {
    return false; // Không có sản phẩm Accessories nào
  }
  return accessories.every(product => product.isAvailable === true);
}

/**
 * Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price × quantity
 */
function calculateTotalInventoryValue(products) {
  return products.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);
}

/**
 * Câu 8: Dùng for...of duyệt mảng products và in ra: 
 * Tên sản phẩm – Danh mục – Trạng thái
 */
function displayProductsInfo(products) {
  console.log('\n=== Câu 8: Danh sách sản phẩm ===');
  for (const product of products) {
    const status = product.isAvailable ? 'Đang bán' : 'Ngừng bán';
    console.log(`${product.name} – ${product.category} – ${status}`);
  }
}

/**
 * Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị tương ứng
 */
function displayProductProperties(product) {
  console.log('\n=== Câu 9: Thuộc tính của sản phẩm ===');
  for (const key in product) {
    if (product.hasOwnProperty(key)) {
      console.log(`Thuộc tính: ${key}, Giá trị: ${product[key]}`);
    }
  }
}

/**
 * Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
 */
function getAvailableAndInStockProductNames(products) {
  return products
    .filter(product => product.isAvailable === true && product.quantity > 0)
    .map(product => product.name);
}

// Export các functions để có thể sử dụng ở file khác
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Product,
    initializeProducts,
    getProductNameAndPrice,
    getProductsInStock,
    hasProductPriceAbove30,
    areAllAccessoriesAvailable,
    calculateTotalInventoryValue,
    displayProductsInfo,
    displayProductProperties,
    getAvailableAndInStockProductNames
  };
}

