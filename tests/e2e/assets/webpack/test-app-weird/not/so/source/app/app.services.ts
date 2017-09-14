

// @ifdef DEBUG
export class DebugService {
}
// @endif

export class NormalService {
}

export const SERVICES = [
    // @ifdef DEBUG
    DebugService,
    // @endif
    NormalService,
]

