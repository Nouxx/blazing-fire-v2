export interface Menu {
  id: number;
  name: string;
}

interface MenusTemporaryProperties {
  menus: Menu[];
}

export async function MenusTemporary({ menus }: MenusTemporaryProperties) {
  return <pre>{menus[0].name}</pre>;
}
