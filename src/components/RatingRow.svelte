<script>
  export let key = 'key';

</script>
<div class="flex items-center border-b border-teal-100 border-dotted">
  <div class="flex-1 font-semibold uppercase font-amatic text-2xl md:text-3xl w-1/3">
    {key}
  </div>
  <div class="flex-0 ml-2 text-justify w-2/3">
    <slot></slot>
  </div>
</div>
