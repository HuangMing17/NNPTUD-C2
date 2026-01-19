const {
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
} = require('./product');

// Khởi tạo mảng products
const products = initializeProducts();

console.log('=== BÀI TẬP XỬ LÝ ĐỐI TƯỢNG PRODUCT ===\n');

// Câu 1: Constructor function đã được khai báo trong product.js
console.log('Câu 1: Constructor function Product đã được khai báo ✓');

// Câu 2: Mảng products đã được khởi tạo
console.log(`\nCâu 2: Đã khởi tạo ${products.length} sản phẩm:`);
products.forEach((p, index) => {
  console.log(`  ${index + 1}. ${p.name} - ${p.category} - Giá: $${p.price}`);
});

// Câu 3: Tạo mảng mới chỉ chứa name và price
console.log('\n=== Câu 3: Mảng name và price ===');
const nameAndPrice = getProductNameAndPrice(products);
console.log(nameAndPrice);

// Câu 4: Lọc sản phẩm còn hàng
console.log('\n=== Câu 4: Sản phẩm còn hàng (quantity > 0) ===');
const inStockProducts = getProductsInStock(products);
console.log(`Có ${inStockProducts.length} sản phẩm còn hàng:`);
inStockProducts.forEach(p => {
  console.log(`  - ${p.name}: ${p.quantity} sản phẩm`);
});

// Câu 5: Kiểm tra có sản phẩm giá > 30
console.log('\n=== Câu 5: Kiểm tra có sản phẩm giá > $30 ===');
const hasExpensiveProduct = hasProductPriceAbove30(products);
console.log(`Kết quả: ${hasExpensiveProduct ? 'Có' : 'Không'}`);

// Câu 6: Kiểm tra tất cả Accessories có đang bán không
console.log('\n=== Câu 6: Tất cả Accessories có đang bán? ===');
const allAccessoriesAvailable = areAllAccessoriesAvailable(products);
console.log(`Kết quả: ${allAccessoriesAvailable ? 'Có' : 'Không'}`);
const accessories = products.filter(p => p.category === 'Accessories');
console.log('Chi tiết:');
accessories.forEach(p => {
  console.log(`  - ${p.name}: ${p.isAvailable ? 'Đang bán' : 'Ngừng bán'}`);
});

// Câu 7: Tính tổng giá trị kho hàng
console.log('\n=== Câu 7: Tổng giá trị kho hàng ===');
const totalValue = calculateTotalInventoryValue(products);
console.log(`Tổng giá trị kho hàng: $${totalValue.toLocaleString()}`);

// Câu 8: Dùng for...of để in thông tin
displayProductsInfo(products);

// Câu 9: Dùng for...in để in thuộc tính
displayProductProperties(products[0]); // In thuộc tính của sản phẩm đầu tiên

// Câu 10: Danh sách tên sản phẩm đang bán và còn hàng
console.log('\n=== Câu 10: Sản phẩm đang bán và còn hàng ===');
const availableInStockNames = getAvailableAndInStockProductNames(products);
console.log('Danh sách:');
availableInStockNames.forEach((name, index) => {
  console.log(`  ${index + 1}. ${name}`);
});

console.log('\n=== HOÀN THÀNH BÀI TẬP ===');

