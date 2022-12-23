<script>
  export let key = 'key';

</script>
<div class="flex  border-b border-teal-100 border-dotted">
  <div class="flex-1 font-semibold uppercase font-amatic text-2xl md:text-3xl w-1/3">
    {key}
  </div>
  <div class="flex-0 ml-4 text-justify w-2/3 flex flex-col justify-start">
    <slot></slot>
  </div>
</div>
