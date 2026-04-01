export default defineNuxtRouteMiddleware(() => {
  const navbar = useNavbarStore()
  if (navbar.isOpen) navbar.close()
})
