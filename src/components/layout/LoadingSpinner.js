
const LoadingSpinner = () => {

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
      <div className="block w-8 h-8 border-y-primary border-x-transparent rounded-full border-4 animate-spin m-2"></div>
    </div>
  );
}

export default LoadingSpinner;