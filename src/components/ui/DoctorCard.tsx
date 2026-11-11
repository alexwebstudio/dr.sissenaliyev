import Image from "next/image";
import Link from "next/link";
import type { Doctor } from "@/content/doctors";

// Как в сторис клиники: фото на бирюзе, белая плашка с именем бирюзовым капсом, специализация, стаж и 3D-зуб.
export function DoctorCard({ doctor, sizes }: { doctor: Doctor; sizes: string }) {
  return (
    <Link href={`/doctors/${doctor.slug}`} aria-label={`${doctor.name}, ${doctor.role.toLowerCase()}, стаж ${doctor.experience}`} className="doc-card group">
      <span className="doc-photo">
        <Image src={doctor.image} alt={doctor.imageAlt} fill sizes={sizes} className="object-cover object-top" />
      </span>
      <span className="doc-plate">
        <span className="doc-name">{doctor.name}</span>
        <span className="mt-1.5 block pr-12 text-[14px] leading-snug text-ink-muted">{doctor.role}</span>
        <span className="mt-2 block text-[13px] font-bold text-accent-press">Стаж {doctor.experience}</span>
        <Image src="/models/tooth.png" alt="" width={128} height={128} className="doc-tooth" aria-hidden="true" />
      </span>
    </Link>
  );
}
