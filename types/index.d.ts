import type { UserSessionComposable } from "#auth-utils";

declare global {
  interface UnbotmeUser {
    id: string;
    login: string;
    display_name: string;
    type: string;
    broadcaster_type: string;
    description: string;
    profile_image_url: string;
    offline_image_url: string;
    view_count: number;
    email: string;
    created_at: string;
    tokens: UserTokens;
  }

  interface UnbotmeUserTokens {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    token_type: "bearer";
  }

  interface UnbotmeUserSessionComposable extends UserSessionComposable {
    user: ComputedRef<UnbotmeUser>;
  }
}

export {};
