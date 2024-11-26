function PriceLine({ concept, value }: { concept: string; value: string }) {
  return (
    <div className="flex justify-between mx-3">
      <p className="text-sm">{concept}</p>
      <p className="text-sm font-bold">$ {value}</p>
    </div>
  )
}

export default PriceLine
