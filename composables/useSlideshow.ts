export function useSlideshow(
  slides: { steps?: number }[],
  onEndExit?: () => void
) {
  const currentSlide = ref(0)
  const step = ref(1)
  const direction = ref<'next' | 'prev'>('next')

  const currentMaxSteps = computed(
    () => slides[currentSlide.value]?.steps ?? 1
  )

  function next() {
    if (step.value < currentMaxSteps.value) {
      step.value++
    } else if (currentSlide.value < slides.length - 1) {
      direction.value = 'next'
      currentSlide.value++
      step.value = 1
    } else {
      onEndExit?.()
    }
  }

  function prev() {
    if (step.value > 1) {
      step.value--
    } else if (currentSlide.value > 0) {
      direction.value = 'prev'
      currentSlide.value--
      step.value = slides[currentSlide.value].steps ?? 1
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }

  function handleClick(e: MouseEvent) {
    const midpoint = window.innerWidth / 2
    if (e.clientX > midpoint) next()
    else prev()
  }

  onMounted(() => window.addEventListener('keydown', handleKeydown))
  onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))

  return {
    currentSlide: readonly(currentSlide),
    step: readonly(step),
    direction: readonly(direction),
    next,
    prev,
    handleClick,
  }
}
