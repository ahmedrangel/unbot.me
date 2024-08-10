const Ripple = {
  colorScheme: {
    light: {
      root: {
        background: "rgba(0,0,0,0.4)"
      }
    },
    dark: {
      root: {
        background: "rgba(255,255,255,0.4)"
      }
    }
  }
};

const Button = {
  root: {
    borderRadius: "6px",
    roundedBorderRadius: "2rem",
    paddingX: "1.25rem",
    paddingY: "0.75rem",
    gap: "0.5rem",
    iconOnlyWidth: "2.5rem",
    sm: {
      fontSize: "0.875rem",
      paddingX: "0.625rem",
      paddingY: "0.375rem"
    },
    lg: {
      fontSize: "1.125rem",
      paddingX: "0.875rem",
      paddingY: "0.625rem"
    },
    raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    badgeSize: "1rem"
  }
};

export const Card = {
  root: {
    borderRadius: "6px",
    shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
  },
  body: {
    padding: "1.25rem",
    gap: "0.5rem"
  },
  caption: {
    gap: "0.5rem"
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "500"
  }
};

export const customPreset = {
  directives: {
    ripple: Ripple
  },
  components: {
    button: Button,
    card: Card
  }
};
