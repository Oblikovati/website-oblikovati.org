import {
  PenTool,
  Boxes,
  GitBranch,
  Layers,
  Palette,
  Shuffle,
  Repeat2,
  FileStack,
} from 'lucide-react'

// Real capabilities, framed as benefits. Each entry maps to one card in the
// capabilities grid. Keep copy outcome-oriented, not spec-sheet.
export const FEATURES = [
  {
    icon: PenTool,
    title: 'Sketch with intent',
    body: 'Constrain 2D and 3D sketches with dimensions and geometric relations, then let those profiles drive everything downstream.',
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
    icon: Palette,
    title: 'Materials & appearance',
    body: 'Assign materials and appearances to communicate intent and keep your models presentation-ready.',
  },
  {
    icon: FileStack,
    title: 'Industry file exchange',
    body: 'Import and export STEP, STL, OBJ and 3MF, so Oblikovati slots into the pipelines and partners you already work with.',
  },
  {
    icon: Shuffle,
    title: 'A git-friendly document format',
    body: 'Models are stored in a clean, diff-able format — version your designs, review changes and collaborate like you do with code.',
  },
]
