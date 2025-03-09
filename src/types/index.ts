// Common types used across the application

export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface MenuItem extends NavItem {
  disabled?: boolean;
  external?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface FooterItem extends NavItem {
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}
