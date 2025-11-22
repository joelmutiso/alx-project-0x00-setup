import Card from "@/components/Card"
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      
      <div className="mb-8">
        <Card /> <Card /> <Card />
      </div>

      {/* New Button Instances */}
      <div className="flex gap-4 items-center">
        {/* Small - Rounded Small */}
        <Button title="Small Button" styles="text-sm rounded-sm" />
        
        {/* Medium - Rounded Medium */}
        <Button title="Medium Button" styles="text-base rounded-md" />
        
        {/* Large - Rounded Large */}
        <Button title="Large Button" styles="text-lg rounded-full" />
      </div>
    </div>
  )
}

export default Landing;

