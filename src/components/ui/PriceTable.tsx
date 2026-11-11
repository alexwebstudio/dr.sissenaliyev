import { priceLabel, type PriceItem } from "@/content/prices";

// Прайс клиники: название слева, цена справа. «Бесплатно» выделено как плюс.
// Одна разметка для всех экранов: на телефоне строка переносится, цена не уезжает.
export function PriceTable({ items, caption }: { items: PriceItem[]; caption: string }) {
  return (
    <table className="w-full border-collapse text-left">
      <caption className="sr-only">{caption}</caption>
      <thead className="sr-only">
        <tr>
          <th scope="col">Услуга</th>
          <th scope="col">Цена, ₸</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={`${item.name}-${index}`} className="hair-row">
            <th scope="row" className="py-3.5 pr-4 text-[15px] font-medium leading-snug md:py-4 md:text-[16px]">
              {item.name}
            </th>
            <td className="whitespace-nowrap py-3.5 text-right align-top md:py-4">
              {item.price === null ? (
                <span className="inline-flex items-center rounded-full bg-accent-press px-3 py-1 text-[13px] font-bold uppercase tracking-[0.04em] text-white">бесплатно</span>
              ) : (
                <span className="t-mono !text-[15px] font-bold md:!text-[16px]">
                  {priceLabel(item)}
                  <span className="ml-1 font-semibold text-ink-muted">₸</span>
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
