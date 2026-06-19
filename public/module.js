Module['arguments'] = [
  '-nographic',
  '-m', '128M',
  '-machine', 'virt',
  '-bios', '/pack/opensbi-riscv32-generic-fw_dynamic.bin',
  '-kernel', '/pack/kernel.elf',

  '-drive', 'if=none,format=raw,file=/pack/fs.ext4,id=hd0',
  '-device', 'virtio-blk-device,drive=hd0',

  '-global', 'virtio-mmio.force-legacy=false'
];