const MESSAGE_CONFIG = {
    INVALID_CONTEXT: (contextName: string): string => {
        return `This ${contextName} cannot be used in this component.`
    }
}

export default MESSAGE_CONFIG;