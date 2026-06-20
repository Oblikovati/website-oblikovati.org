// FAQ content. Answers stay honest about early-development status while
// staying professional and aspirational.
export const FAQ_ITEMS = [
  {
    q: 'Is it really free?',
    a: 'Yes. Oblikovati is fully open source and free to use, with no subscription, no per-seat licensing and no paywalled features. The application is GPL-2.0 and the public automation API is Apache-2.0. You can read, build and contribute to the code yourself.',
  },
  {
    q: 'Will my STEP files work?',
    a: 'Oblikovati supports industry-standard file exchange — you can import and export STEP, as well as STL, OBJ and 3MF — so it fits into the pipelines and partner workflows you already use. As the project matures, exchange fidelity continues to improve.',
  },
  {
    q: 'Does it run on Linux?',
    a: 'Yes — natively, as a first-class target alongside macOS and Windows. No virtual machine, no compatibility layer. Linux is exactly the platform commercial CAD vendors tend to neglect, and Oblikovati treats it as a peer.',
  },
  {
    q: 'Can I automate it?',
    a: 'Yes. Oblikovati exposes an open, documented automation API under the permissive Apache-2.0 license. You can script repetitive workflows, build add-ins that extend the application, and integrate it with your own systems — all against a stable public contract.',
  },
  {
    q: 'I come from a mainstream parametric CAD tool. Will I have to relearn everything?',
    a: 'No. Oblikovati follows the same parametric, feature-based, history-driven approach the established tools use — sketches drive features, features build a model you can edit and reorder, and parameters tie it all together. The concepts transfer directly, so the learning curve is about the interface, not the philosophy.',
  },
  {
    q: 'What can it actually do today?',
    a: 'A lot already: constrained 2D and 3D sketching, the full part feature set (extrude, revolve, sweep, loft, coil, hole, fillet, chamfer, shell, rib, draft, thread), surfacing, patterns and mirrors, an assembly environment with constraints, joints and a bill of materials, a sheet-metal environment with flat patterns, associative drawings, materials and appearances, measurement and physical properties, and file exchange. It is honest alpha software under active development — interoperability, simulation and automation are maturing — so verify critical results, but the core modeling workflow is real and usable now.',
  },
]
