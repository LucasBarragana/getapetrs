export default function AddToCartButton({
  hasSizesOrExtras, onClick
}) {
  if (!hasSizesOrExtras) {
    return (
      <button
      type="button"
      onClick={onClick}
      className="mt-4 bg-primary text-white rounded-full px-8 py-2 hover:bg-orange-600"
    >
      <span>ADOTE</span>
    </button>
    );    
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 bg-primary text-white rounded-full px-8 py-2 hover:bg-orange-600"      
    >
      <span>ADOTE</span>
    </button>
  );  
  
}