



export default function ColorBlocks() {
    return (
      <div className="p-8 space-y-10">
        <h1 className="text-3xl font-bold text-brand-dark mb-6">
          Color Style Guide
        </h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Brand Colors */}
          <div className="bg-brand-dark text-white p-6 rounded-lg shadow">
            <p className="font-semibold">brand-dark</p>
            <p className="text-sm opacity-80">#027D8F</p>
          </div>
  
          <div className="bg-brand-medium text-white p-6 rounded-lg shadow">
            <p className="font-semibold">brand-medium</p>
            <p className="text-sm opacity-80">#09BE9C</p>
          </div>
  
          <div className="bg-brand-lightest text-brand-dark p-6 rounded-lg shadow">
            <p className="font-semibold">brand-lightest</p>
            <p className="text-sm opacity-80">#E0F5F7</p>
          </div>
  
          {/* Accent Color */}
          <div className="bg-accent-orange text-white p-6 rounded-lg shadow">
            <p className="font-semibold">accent-orange</p>
            <p className="text-sm opacity-80">#FF5715</p>
          </div>
  
          {/* Neutral Colors */}
          <div className="bg-neutral-dark text-white p-6 rounded-lg shadow">
            <p className="font-semibold">neutral-dark</p>
            <p className="text-sm opacity-80">#0F0A0A</p>
          </div>
  
          <div className="bg-neutral-light text-brand-dark p-6 rounded-lg shadow">
            <p className="font-semibold">neutral-light</p>
            <p className="text-sm opacity-80">#F5EDEF</p>
          </div>
        </div>
      </div>
    );
  }
  