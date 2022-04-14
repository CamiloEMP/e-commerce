import { NavItem } from 'components/NavItem'

export const MenuItems = ({
  colors,
  setIsOpen,
}: {
  colors: string
  setIsOpen?: (bool: boolean) => void
}) => {
  return (
    <>
      <NavItem colors={colors} href="/" setIsOpen={setIsOpen}>
        Ver todo
      </NavItem>
      <NavItem colors={colors} href="/products/categories/clothes/men" setIsOpen={setIsOpen}>
        Ropa hombre
      </NavItem>
      <NavItem colors={colors} href="/products/categories/clothes/woman" setIsOpen={setIsOpen}>
        Ropa mujer
      </NavItem>
      <NavItem colors={colors} href="/products/categories/electrodomestics" setIsOpen={setIsOpen}>
        Electrodomesticos
      </NavItem>
      <NavItem colors={colors} href="/products/categories/jawelery" setIsOpen={setIsOpen}>
        Joyeria
      </NavItem>
    </>
  )
}
