export interface Instrument {
  id: number;
  name: string;
}

interface InstrumentsProperties {
  instruments: Instrument[];
}

export default async function Instruments({
  instruments,
}: InstrumentsProperties) {
  return <pre>{JSON.stringify(instruments)}</pre>;
}
