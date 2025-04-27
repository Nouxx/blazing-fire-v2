export interface Instrument {
  id: number;
  name: string;
}

interface InstrumentsProps {
  instruments: Instrument[];
}

export default async function Instruments({ instruments }: InstrumentsProps) {
  return <pre>{JSON.stringify(instruments, null, 2)}</pre>;
}
