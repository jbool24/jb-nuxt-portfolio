export default function(context) {
  if (context.store.state.navbar.isOpen) context.store.dispatch('navbar/close')
}
