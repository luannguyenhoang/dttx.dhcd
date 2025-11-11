/**
 * Utility functions để tối ưu image loading
 */

/**
 * Tạo blur data URL đơn giản để dùng làm placeholder
 */
export const generateBlurDataURL = (width = 10, height = 10): string => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = "#e5e7eb";
    ctx.fillRect(0, 0, width, height);
  }
  return canvas.toDataURL();
};

/**
 * Lấy blur placeholder từ base64 hoặc tạo mới
 */
export const getBlurPlaceholder = (): string => {
  // Base64 của một ảnh 1x1 pixel màu xám nhạt
  return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";
};

/**
 * Kiểm tra xem URL có phải là external image không
 */
export const isExternalImage = (url?: string): boolean => {
  if (!url) return false;
  return url.startsWith("http://") || url.startsWith("https://");
};

/**
 * Lấy quality phù hợp dựa trên loại ảnh
 * - Hero images: 75
 * - Thumbnails: 60
 * - Avatars: 50
 */
export const getImageQuality = (
  type: "hero" | "thumbnail" | "avatar" | "default" = "default"
): number => {
  const qualityMap = {
    hero: 75,
    thumbnail: 60,
    avatar: 50,
    default: 70
  };
  return qualityMap[type];
};
