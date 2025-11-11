import Image from "next/image";
import { CourseContentProps } from "@/types/types";
import { CourseTabs } from "@/app/components/organisms/CourseTabs";

export const CourseContent = ({
  courseData,
  activeTab,
  setActiveTab
}: CourseContentProps) => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white">
      <div className="mb-6 relative h-[400px] w-full overflow-hidden">
        <Image
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          src={courseData?.image?.node?.mediaItemUrl || "/no-image.jpeg"}
          alt="Hình ảnh minh họa khóa học"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          quality={60}
        />
      </div>

      <CourseTabs
        courseData={courseData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};
