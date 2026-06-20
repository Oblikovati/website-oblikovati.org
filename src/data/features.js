import {
  PenTool,
  Boxes,
  GitBranch,
  Layers,
  Palette,
  Repeat2,
  FileStack,
  Spline,
  Combine,
  Frame,
  Ruler,
  Gauge,
} from 'lucide-react'

// Real capabilities, framed as benefits. Each entry maps to one card in the capabilities
// grid. Keep copy outcome-oriented, not spec-sheet. Every line below maps to functionality
// present in the application today (see the project milestones M06–M22).
export const FEATURES = [
  {
    icon: PenTool,
    title: 'Sketch with intent',
    body: 'Constrain 2D and 3D sketches with dimensions and geometric relations, then let those fully-defined profiles drive everything downstream.',
  },
  {
    icon: Boxes,
    title: 'A full feature toolkit',
    body: 'Extrude, revolve, sweep, loft, coil, hole, fillet, chamfer, shell, rib, draft and thread — the operations real parts demand.',
  },
  {
    icon: GitBranch,
    title: 'Parametric history',
    body: 'Every step lives in an editable feature tree. Change a dimension and the whole model recomputes — with reliable undo and redo.',
  },
  {
    icon: Layers,
    title: 'Work geometry that anchors design',
    body: 'Build on work planes, axes and points to locate features precisely and keep complex models robust as they evolve.',
  },
  {
    icon: Repeat2,
    title: 'Pattern & mirror',
    body: 'Reproduce features and bodies in rectangular, circular and mirrored arrangements without redrawing a thing.',
  },
  {
    icon: Spline,
    title: 'Surfaces & freeform',
    body: 'Patch, stitch, sculpt, thicken, offset and trim surfaces — model the freeform shapes solids alone can’t express.',
  },
  {
    icon: Combine,
    title: 'Assemblies & BOM',
    body: 'Place components, constrain and joint them into mechanisms, then read structure and quantities straight off a live bill of materials.',
  },
  {
    icon: Frame,
    title: 'Sheet metal',
    body: 'Work in a dedicated sheet-metal environment with faces, flanges and bends — then unfold to a manufacturable flat pattern.',
  },
  {
    icon: Ruler,
    title: 'Drawings & documentation',
    body: 'Generate associative views from your models and annotate them with dimensions and notes to document what gets built.',
  },
  {
    icon: Gauge,
    title: 'Measure & analyze',
    body: 'Measure geometry, pull physical properties like mass and centre of gravity, and check model health as designs grow.',
  },
  {
    icon: Palette,
    title: 'Materials & appearance',
    body: 'Assign materials, color styles and appearances, then present models with realistic shading, lighting and shadows.',
  },
  {
    icon: FileStack,
    title: 'Industry file exchange',
    body: 'Import and export STEP, STL, OBJ, 3MF and DXF, so Oblikovati slots into the pipelines and partners you already work with.',
  },
]
