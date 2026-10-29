export const site = {
  shortName: "Song Hành",
  legalName: "CÔNG TY TNHH DỊCH VỤ KẾ TOÁN SONG HÀNH",
  tagline: "Kế toán chuẩn mực · Thuế minh bạch · Đồng hành bền vững",
  portalLabel: "CỔNG THÔNG TIN ĐIỆN TỬ",
  domain: "songhanh.vn",
  hotline: "1900 8686",
  hotlineHref: "tel:19008686",
  phone: "(024) 3 868 6868",
  email: "lienhe@songhanh.vn",
  address: "Tầng 6, Tòa nhà Sao Mai, số 18 đường Lý Thường Kiệt, quận Hoàn Kiếm, TP. Hà Nội",
  taxCode: "0109 876 543",
  license: "0109 876 543 do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp",
  workingHours: "Thứ 2 – Thứ 6: 8:00 – 17:30 · Thứ 7: 8:00 – 12:00",
  responsiblePerson: "Bà Nguyễn Thu Hà – Giám đốc",
  stats: [
    { value: "12+", label: "Năm hoạt động trong ngành" },
    { value: "800+", label: "Doanh nghiệp đang phục vụ" },
    { value: "45+", label: "Chuyên viên kế toán, thuế" },
    { value: "98%", label: "Khách hàng gia hạn hợp đồng" },
  ],
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const navigation: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Giới thiệu",
    href: "/gioi-thieu",
    children: [
      { label: "Công ty", href: "/gioi-thieu", description: "Tầm nhìn, sứ mệnh và năng lực" },
      {
        label: "Thành viên sáng lập",
        href: "/gioi-thieu/thanh-vien-sang-lap",
        description: "Những người đặt nền móng",
      },
      {
        label: "Đội ngũ nhân sự",
        href: "/gioi-thieu/doi-ngu-nhan-su",
        description: "Cơ cấu tổ chức và chuyên gia",
      },
    ],
  },
  {
    label: "Dịch vụ cung cấp",
    href: "/dich-vu",
    children: [
      { label: "Dịch vụ kế toán", href: "/dich-vu/ke-toan", description: "Kế toán trọn gói, báo cáo tài chính" },
      { label: "Dịch vụ tư vấn thuế", href: "/dich-vu/tu-van-thue", description: "Kê khai, quyết toán, hoàn thuế" },
      {
        label: "Thành lập doanh nghiệp",
        href: "/dich-vu/thanh-lap-doanh-nghiep",
        description: "Trọn gói pháp lý và con dấu",
      },
      {
        label: "Giải thể doanh nghiệp",
        href: "/dich-vu/giai-the-doanh-nghiep",
        description: "Chấm dứt hoạt động đúng luật",
      },
      {
        label: "Dịch vụ khác",
        href: "/dich-vu/khac",
        description: "Đại diện pháp lý, đào tạo, kiểm toán nội bộ",
      },
    ],
  },
  {
    label: "Tin tức",
    href: "/tin-tuc",
    children: [
      { label: "Tin hoạt động", href: "/tin-tuc/hoat-dong", description: "Hoạt động và kiến thức chuyên môn" },
      { label: "Tin tuyển dụng", href: "/tin-tuc/tuyen-dung", description: "Vị trí đang mở tại Song Hành" },
    ],
  },
];

export type ServiceItem = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  icon: "calculator" | "scale" | "building" | "fileX" | "layers";
  highlights: string[];
  intro: string[];
  scope: { title: string; detail: string }[];
  process: { step: string; title: string; detail: string }[];
  priceNote: string;
  priceRows: { label: string; price: string; note: string }[];
  faq: { question: string; answer: string }[];
};

export const services: ServiceItem[] = [
  {
    slug: "ke-toan",
    title: "Dịch vụ kế toán",
    shortTitle: "Kế toán",
    summary:
      "Kế toán trọn gói theo chuẩn mực VAS: ghi nhận chứng từ, hạch toán, lập báo cáo tài chính và quyết toán năm.",
    icon: "calculator",
    highlights: ["Kế toán trọn gói", "Báo cáo tài chính", "Kế toán nội bộ"],
    intro: [
      "Song Hành nhận xử lý toàn bộ công việc kế toán của doanh nghiệp theo hợp đồng trọn gói, bảo đảm sổ sách được cập nhật đúng thời hạn và tuân thủ Luật Kế toán, Thông tư 200/2014/TT-BTC và chế độ kế toán hiện hành.",
      "Mỗi khách hàng được phân công một kế toán phụ trách chính và một kế toán soát xét độc lập, nhờ đó số liệu được kiểm tra chéo trước khi lên báo cáo. Toàn bộ chứng từ được số hóa và lưu trữ trên hệ thống có phân quyền truy cập.",
    ],
    scope: [
      { title: "Ghi nhận và hạch toán chứng từ", detail: "Thu thập, kiểm tra tính hợp lệ của hóa đơn, chứng từ; hạch toán vào phần mềm kế toán theo đúng tài khoản và kỳ phát sinh." },
      { title: "Sổ sách và báo cáo thuế", detail: "Lập sổ nhật ký, sổ cái, bảng cân đối tài khoản; lập tờ khai thuế GTGT, TNCN, TNDN theo tháng, quý đúng hạn." },
      { title: "Báo cáo tài chính năm", detail: "Lập bảng cân đối kế toán, báo cáo kết quả hoạt động kinh doanh, lưu chuyển tiền tệ và thuyết minh, kèm bản phân tích cho ban lãnh đạo." },
      { title: "Quyết toán và công bố", detail: "Chuẩn bị hồ sơ quyết toán thuế TNDN, TNCN; hỗ trợ doanh nghiệp công bố báo cáo tài chính theo quy định." },
      { title: "Kiểm tra nội bộ định kỳ", detail: "Soát xét số liệu mỗi quý, phát hiện sớm sai lệch và đề xuất điều chỉnh trước khi cơ quan thuế kiểm tra." },
      { title: "Tư vấn kế toán trưởng", detail: "Hỗ trợ nghiệp vụ cho kế toán nội bộ, xây dựng quy trình chứng từ và chính sách kế toán phù hợp đặc thù ngành." },
    ],
    process: [
      { step: "01", title: "Khảo sát và báo giá", detail: "Đánh giá loại hình, quy mô và khối lượng chứng từ để đề xuất gói dịch vụ phù hợp." },
      { step: "02", title: "Ký hợp đồng và bàn giao", detail: "Ký hợp đồng nguyên tắc, thỏa thuận bảo mật, bàn giao chứng từ và cấp quyền truy cập phần mềm." },
      { step: "03", title: "Xử lý hằng tháng", detail: "Nhận chứng từ trước ngày 05, hoàn tất hạch toán và gửi báo cáo quản trị trước ngày 15." },
      { step: "04", title: "Soát xét và báo cáo", detail: "Kế toán trưởng soát xét, ký duyệt và gửi bộ báo cáo tháng kèm lưu ý rủi ro thuế." },
    ],
    priceNote:
      "Mức phí tham khảo, đã bao gồm thuế GTGT; áp dụng cho doanh nghiệp có địa điểm kinh doanh tại Hà Nội và TP. Hồ Chí Minh.",
    priceRows: [
      { label: "Doanh nghiệp mới thành lập, chưa phát sinh doanh thu", price: "900.000 đ/quý", note: "Tối thiểu 6 tháng" },
      { label: "Doanh nghiệp thương mại, dưới 50 hóa đơn/tháng", price: "1.500.000 đ/tháng", note: "Hợp đồng 12 tháng" },
      { label: "Doanh nghiệp sản xuất, 50 – 200 hóa đơn/tháng", price: "3.200.000 đ/tháng", note: "Báo cáo quản trị hằng tháng" },
      { label: "Doanh nghiệp nhiều chi nhánh, trên 200 hóa đơn/tháng", price: "Liên hệ báo giá", note: "Khảo sát thực tế" },
    ],
    faq: [
      {
        question: "Doanh nghiệp mới thành lập có cần thuê kế toán dịch vụ không?",
        answer:
          "Có. Trong năm đầu, doanh nghiệp vẫn phải kê khai thuế, nộp báo cáo tài chính và lưu giữ chứng từ. Việc thuê kế toán dịch vụ giúp tránh sai sót và các khoản phạt chậm nộp, đồng thời tiết kiệm chi phí so với tuyển kế toán toàn thời gian.",
      },
      {
        question: "Chứng từ được bàn giao và bảo mật như thế nào?",
        answer:
          "Chứng từ được bàn giao trực tiếp tại văn phòng hoặc qua chuyển phát, kèm biên bản giao nhận. Bản mềm được lưu trên hệ thống phân quyền, chỉ kế toán phụ trách và kế toán trưởng của Song Hành được truy cập. Hợp đồng có điều khoản bảo mật riêng.",
      },
      {
        question: "Nếu cơ quan thuế kiểm tra thì ai chịu trách nhiệm?",
        answer:
          "Song Hành cử chuyên viên phối hợp giải trình trong suốt thời gian kiểm tra đối với phần số liệu do chúng tôi thực hiện, không thu thêm phí trong phạm vi hợp đồng.",
      },
    ],
  },
  {
    slug: "tu-van-thue",
    title: "Dịch vụ tư vấn thuế",
    shortTitle: "Tư vấn thuế",
    summary:
      "Kê khai, quyết toán, hoàn thuế và rà soát rủi ro thuế; cập nhật kịp thời thay đổi chính sách và hướng dẫn của cơ quan thuế.",
    icon: "scale",
    highlights: ["Kê khai thuế", "Quyết toán", "Rà soát rủi ro"],
    intro: [
      "Chính sách thuế thay đổi liên tục, trong khi sai lệch nhỏ về hóa đơn hay thời điểm ghi nhận doanh thu có thể dẫn đến truy thu và phạt. Song Hành cung cấp dịch vụ tư vấn thuế theo hướng phòng ngừa: rà soát trước, xử lý sau.",
      "Đội ngũ tư vấn của chúng tôi trực tiếp làm việc với cơ quan thuế, nắm rõ thực tiễn áp dụng tại từng địa bàn và cập nhật văn bản mới trong vòng 24 giờ kể từ khi ban hành.",
    ],
    scope: [
      { title: "Kê khai thuế định kỳ", detail: "Lập và nộp tờ khai GTGT, TNCN, TNDN, thuế nhà thầu, phí và lệ phí theo đúng hạn, đúng mẫu." },
      { title: "Quyết toán thuế", detail: "Lập hồ sơ quyết toán TNDN, TNCN; đối chiếu số liệu với cơ quan thuế và giải trình chênh lệch." },
      { title: "Hoàn thuế GTGT", detail: "Chuẩn bị hồ sơ hoàn thuế, theo dõi tiến trình và phối hợp giải trình đến khi nhận được quyết định hoàn." },
      { title: "Rà soát rủi ro thuế", detail: "Đánh giá hồ sơ, hóa đơn và chính sách kế toán hiện tại; lập báo cáo rủi ro kèm phương án điều chỉnh." },
      { title: "Tư vấn tối ưu nghĩa vụ thuế", detail: "Đề xuất cơ cấu giao dịch và chính sách hợp pháp, phù hợp mô hình kinh doanh và hiệp định thuế." },
      { title: "Hỗ trợ kiểm tra, thanh tra", detail: "Đồng hành cùng doanh nghiệp trong suốt đợt kiểm tra, chuẩn bị hồ sơ và giải trình tại cơ quan thuế." },
    ],
    process: [
      { step: "01", title: "Đánh giá hiện trạng", detail: "Thu thập tờ khai, sổ sách và hóa đơn của 12 tháng gần nhất để nhận diện rủi ro." },
      { step: "02", title: "Báo cáo rà soát", detail: "Trình bày các điểm chưa phù hợp, mức độ rủi ro và phương án xử lý theo thứ tự ưu tiên." },
      { step: "03", title: "Thống nhất phương án", detail: "Làm việc với ban lãnh đạo để chọn phương án tối ưu giữa chi phí tuân thủ và lợi ích thuế." },
      { step: "04", title: "Thực hiện và theo dõi", detail: "Điều chỉnh, bổ sung hồ sơ, nộp lại tờ khai và theo dõi phản hồi từ cơ quan thuế." },
    ],
    priceNote: "Phí tư vấn theo phạm vi công việc. Báo giá được gửi sau buổi làm việc đầu tiên, miễn phí trong 60 phút.",
    priceRows: [
      { label: "Kê khai thuế hằng tháng", price: "600.000 đ/tháng", note: "Doanh nghiệp dưới 30 hóa đơn" },
      { label: "Quyết toán thuế TNDN – TNCN", price: "2.500.000 đ/hồ sơ", note: "Doanh nghiệp quy mô nhỏ" },
      { label: "Rà soát rủi ro thuế toàn diện", price: "8.000.000 đ/gói", note: "Báo cáo chi tiết kèm khuyến nghị" },
      { label: "Hỗ trợ thanh tra, kiểm tra thuế", price: "Theo ngày công", note: "Báo giá sau khi nắm phạm vi" },
    ],
    faq: [
      {
        question: "Song Hành có nhận hồ sơ đang bị cơ quan thuế yêu cầu giải trình không?",
        answer:
          "Có. Chúng tôi thường xuyên tiếp nhận hồ sơ đã có thông báo của cơ quan thuế, rà soát lại toàn bộ và đại diện doanh nghiệp giải trình. Thời gian xử lý tùy mức độ phức tạp, trung bình từ 5 đến 15 ngày làm việc.",
      },
      {
        question: "Dịch vụ tư vấn thuế có bao gồm cập nhật văn bản mới không?",
        answer:
          "Có. Khách hàng hợp đồng năm nhận bản tin chính sách hằng tháng và thông báo ưu tiên khi có thay đổi ảnh hưởng trực tiếp đến ngành nghề của mình.",
      },
      {
        question: "Thông tin doanh nghiệp có được giữ kín không?",
        answer:
          "Toàn bộ hồ sơ được quản lý theo quy trình bảo mật nội bộ, chỉ những chuyên viên được phân công mới được truy cập. Song Hành không chia sẻ dữ liệu khách hàng cho bên thứ ba.",
      },
    ],
  },
  {
    slug: "thanh-lap-doanh-nghiep",
    title: "Dịch vụ thành lập doanh nghiệp",
    shortTitle: "Thành lập doanh nghiệp",
    summary:
      "Trọn gói từ tư vấn loại hình, soạn hồ sơ, nộp cơ quan đăng ký kinh doanh đến khắc dấu, mở tài khoản và khai thuế ban đầu.",
    icon: "building",
    highlights: ["Hồ sơ trọn gói", "Con dấu & tài khoản", "Khai thuế ban đầu"],
    intro: [
      "Một doanh nghiệp mới cần hoàn tất nhiều thủ tục song song: đăng ký kinh doanh, khắc dấu, đăng ký thuế, mở tài khoản ngân hàng, đăng ký chữ ký số và kê khai lệ phí môn bài. Song Hành thực hiện trọn gói để chủ doanh nghiệp tập trung vào kinh doanh.",
      "Chúng tôi tư vấn loại hình doanh nghiệp, ngành nghề và vốn điều lệ phù hợp với định hướng hoạt động, đồng thời lưu ý các điều kiện kinh doanh đặc thù cần xin giấy phép con.",
    ],
    scope: [
      { title: "Tư vấn loại hình và ngành nghề", detail: "Phân tích ưu nhược điểm của công ty TNHH, cổ phần, hộ kinh doanh; gợi ý mã ngành và vốn điều lệ hợp lý." },
      { title: "Soạn và nộp hồ sơ", detail: "Soạn điều lệ, danh sách thành viên, giấy đề nghị đăng ký; nộp trực tuyến và theo dõi đến khi có giấy chứng nhận." },
      { title: "Con dấu và chữ ký số", detail: "Khắc con dấu tròn, đăng ký mẫu dấu, hỗ trợ đăng ký chữ ký số và tài khoản thuế điện tử." },
      { title: "Khai thuế ban đầu", detail: "Đăng ký phương pháp tính thuế, nộp lệ phí môn bài, đăng ký tài khoản ngân hàng với cơ quan thuế." },
      { title: "Đăng ký lao động và bảo hiểm", detail: "Khai báo lao động ban đầu, đăng ký tham gia BHXH, BHYT, BHTN cho người lao động." },
      { title: "Bàn giao hồ sơ pháp lý", detail: "Bàn giao đầy đủ bộ hồ sơ, hướng dẫn lưu trữ và sử dụng hóa đơn điện tử." },
    ],
    process: [
      { step: "01", title: "Tư vấn và chốt phương án", detail: "Làm rõ mô hình kinh doanh, vốn, ngành nghề và địa điểm để chọn phương án tối ưu." },
      { step: "02", title: "Chuẩn bị hồ sơ", detail: "Thu thập giấy tờ tùy thân, soạn thảo hồ sơ và gửi khách hàng ký duyệt." },
      { step: "03", title: "Nộp và theo dõi", detail: "Nộp hồ sơ tại Sở Kế hoạch và Đầu tư, xử lý yêu cầu bổ sung nếu có." },
      { step: "04", title: "Hoàn tất sau thành lập", detail: "Khắc dấu, khai thuế ban đầu, đăng ký chữ ký số và bàn giao hồ sơ." },
    ],
    priceNote: "Phí dịch vụ chưa bao gồm lệ phí nhà nước và phí khắc dấu, chữ ký số của đơn vị cung cấp thứ ba.",
    priceRows: [
      { label: "Thành lập công ty TNHH một thành viên", price: "1.800.000 đ", note: "Hoàn tất trong 5 – 7 ngày làm việc" },
      { label: "Thành lập công ty TNHH hai thành viên trở lên", price: "2.200.000 đ", note: "Hoàn tất trong 5 – 7 ngày làm việc" },
      { label: "Thành lập công ty cổ phần", price: "2.800.000 đ", note: "Kèm tư vấn cơ cấu cổ đông" },
      { label: "Thành lập chi nhánh, văn phòng đại diện", price: "1.500.000 đ", note: "Trong cùng tỉnh, thành phố" },
    ],
    faq: [
      {
        question: "Tôi cần chuẩn bị những giấy tờ gì?",
        answer:
          "Với cá nhân góp vốn: căn cước công dân còn hiệu lực. Với tổ chức góp vốn: giấy chứng nhận đăng ký doanh nghiệp, quyết định cử người đại diện và giấy tờ tùy thân của người đại diện. Song Hành lập danh mục chi tiết theo từng trường hợp.",
      },
      {
        question: "Bao lâu thì có giấy chứng nhận đăng ký doanh nghiệp?",
        answer:
          "Thông thường 3 ngày làm việc kể từ khi hồ sơ hợp lệ. Tính cả khắc dấu và khai thuế ban đầu, thời gian hoàn tất trọn gói khoảng 5 đến 7 ngày làm việc.",
      },
      {
        question: "Sau khi thành lập, công ty có phải thuê kế toán ngay không?",
        answer:
          "Doanh nghiệp phải kê khai thuế và nộp lệ phí môn bài ngay từ năm đầu. Nếu chưa có kế toán, Song Hành có gói kế toán khởi nghiệp với mức phí ưu đãi cho 6 tháng đầu.",
      },
    ],
  },
  {
    slug: "giai-the-doanh-nghiep",
    title: "Dịch vụ giải thể doanh nghiệp",
    shortTitle: "Giải thể doanh nghiệp",
    summary:
      "Chấm dứt hoạt động đúng trình tự: quyết toán thuế, thanh lý tài sản, hoàn tất nghĩa vụ và nộp hồ sơ giải thể.",
    icon: "fileX",
    highlights: ["Quyết toán thuế", "Thanh lý tài sản", "Nộp hồ sơ"],
    intro: [
      "Giải thể không chỉ là nộp đơn xin chấm dứt hoạt động. Doanh nghiệp phải hoàn tất nghĩa vụ thuế, thanh toán các khoản nợ, xử lý tài sản và thông báo cho các bên liên quan trước khi cơ quan đăng ký kinh doanh ra quyết định.",
      "Song Hành xử lý trọn trình tự giải thể, bao gồm rà soát hồ sơ thuế tồn đọng, đại diện làm việc với cơ quan thuế và bảo đảm doanh nghiệp không còn nghĩa vụ phát sinh sau khi hoàn tất.",
    ],
    scope: [
      { title: "Rà soát nghĩa vụ thuế", detail: "Kiểm tra tờ khai còn thiếu, số thuế còn nợ và các khoản phạt để lập kế hoạch xử lý trước khi giải thể." },
      { title: "Quyết toán thuế cuối kỳ", detail: "Lập báo cáo tài chính đến thời điểm giải thể và quyết toán thuế TNDN, TNCN, GTGT." },
      { title: "Thanh lý tài sản và công nợ", detail: "Lập biên bản thanh lý tài sản, đối chiếu công nợ, xử lý các khoản phải thu, phải trả theo quy định." },
      { title: "Hồ sơ và thông báo", detail: "Soạn nghị quyết, biên bản họp, thông báo công khai trên Cổng thông tin quốc gia về đăng ký doanh nghiệp." },
      { title: "Nộp hồ sơ giải thể", detail: "Nộp hồ sơ đến Phòng Đăng ký kinh doanh, theo dõi và bổ sung theo yêu cầu." },
      { title: "Lưu trữ và bàn giao", detail: "Hướng dẫn lưu trữ hồ sơ, chứng từ theo thời hạn luật định và bàn giao tài liệu cho chủ doanh nghiệp." },
    ],
    process: [
      { step: "01", title: "Khảo sát tình trạng", detail: "Kiểm tra nghĩa vụ thuế, công nợ và tài sản để dự báo thời gian, chi phí." },
      { step: "02", title: "Lập kế hoạch giải thể", detail: "Đề xuất trình tự xử lý, ưu tiên các khoản phải hoàn tất trước khi nộp hồ sơ." },
      { step: "03", title: "Quyết toán và thanh lý", detail: "Hoàn tất quyết toán thuế, thanh lý tài sản, chốt công nợ và chuẩn bị hồ sơ." },
      { step: "04", title: "Nộp hồ sơ và nhận kết quả", detail: "Theo dõi đến khi có thông báo chấm dứt hiệu lực mã số thuế và quyết định giải thể." },
    ],
    priceNote: "Mức phí phụ thuộc tình trạng hồ sơ thuế và số kỳ còn tồn đọng; báo giá sau khi khảo sát miễn phí.",
    priceRows: [
      { label: "Doanh nghiệp không còn nợ thuế, hồ sơ đầy đủ", price: "4.500.000 đ", note: "Thời gian 1 – 2 tháng" },
      { label: "Doanh nghiệp còn tờ khai chưa nộp", price: "Từ 6.500.000 đ", note: "Tùy số kỳ cần bổ sung" },
      { label: "Doanh nghiệp có nợ thuế cần xử lý", price: "Liên hệ báo giá", note: "Kèm phương án xử lý nợ" },
      { label: "Tạm ngừng kinh doanh có thời hạn", price: "1.200.000 đ", note: "Thông báo đến cơ quan thuế" },
    ],
    faq: [
      {
        question: "Doanh nghiệp đang nợ thuế có giải thể được không?",
        answer:
          "Không thể hoàn tất giải thể khi còn nợ thuế. Doanh nghiệp phải nộp đủ hoặc được xóa nợ theo quy định. Song Hành rà soát, đề xuất phương án xử lý nợ trước khi nộp hồ sơ.",
      },
      {
        question: "Giải thể khác gì tạm ngừng kinh doanh?",
        answer:
          "Tạm ngừng kinh doanh là dừng hoạt động trong một thời hạn nhưng doanh nghiệp vẫn tồn tại và phải nộp báo cáo thuế theo quy định. Giải thể là chấm dứt hoạt động vĩnh viễn và xóa tên doanh nghiệp khỏi hệ thống đăng ký.",
      },
      {
        question: "Sau khi giải thể, hồ sơ kế toán phải lưu bao lâu?",
        answer:
          "Theo Luật Kế toán, tài liệu kế toán phải lưu trữ tối thiểu 10 năm đối với tài liệu sử dụng trực tiếp và 5 năm với tài liệu khác. Song Hành hướng dẫn phân loại và bàn giao đúng quy định.",
      },
    ],
  },
  {
    slug: "khac",
    title: "Dịch vụ khác",
    shortTitle: "Dịch vụ khác",
    summary:
      "Đại diện pháp lý, kiểm toán nội bộ, đào tạo kế toán thực hành và các gói hỗ trợ theo yêu cầu của doanh nghiệp.",
    icon: "layers",
    highlights: ["Đại diện pháp lý", "Đào tạo kế toán", "Kiểm toán nội bộ"],
    intro: [
      "Ngoài kế toán và thuế, Song Hành cung cấp các dịch vụ bổ trợ giúp doanh nghiệp hoàn thiện bộ máy quản trị tài chính: từ đại diện pháp lý, kiểm soát nội bộ đến đào tạo đội ngũ kế toán tại chỗ.",
      "Các gói dịch vụ được thiết kế linh hoạt theo nhu cầu, có thể kết hợp với hợp đồng kế toán trọn gói để tối ưu chi phí.",
    ],
    scope: [
      { title: "Đại diện pháp lý và thường trú", detail: "Cung cấp địa chỉ trụ sở, người đại diện theo ủy quyền và dịch vụ nhận thư, xử lý thủ tục hành chính." },
      { title: "Kiểm toán nội bộ", detail: "Đánh giá hệ thống kiểm soát, quy trình mua bán và tồn kho; báo cáo phát hiện và khuyến nghị cải thiện." },
      { title: "Đào tạo kế toán thực hành", detail: "Đào tạo kế toán tổng hợp, kế toán trưởng trên chứng từ thực tế, phù hợp doanh nghiệp tự xây dựng đội ngũ." },
      { title: "Xây dựng quy chế tài chính", detail: "Soạn quy chế chi tiêu, quy trình tạm ứng, định mức và phân cấp phê duyệt theo quy mô doanh nghiệp." },
      { title: "Tư vấn chuyển đổi số kế toán", detail: "Lựa chọn phần mềm, chuẩn hóa dữ liệu và triển khai hóa đơn điện tử, chữ ký số đồng bộ." },
      { title: "Hỗ trợ theo yêu cầu", detail: "Các công việc phát sinh như rà soát hợp đồng, đối chiếu công nợ, lập hồ sơ vay vốn ngân hàng." },
    ],
    process: [
      { step: "01", title: "Tiếp nhận yêu cầu", detail: "Trao đổi nhu cầu, phạm vi và thời hạn mong muốn của doanh nghiệp." },
      { step: "02", title: "Đề xuất phạm vi", detail: "Gửi đề xuất công việc, sản phẩm bàn giao và mức phí tương ứng." },
      { step: "03", title: "Triển khai", detail: "Phân công chuyên viên phụ trách, làm việc trực tiếp tại doanh nghiệp khi cần." },
      { step: "04", title: "Nghiệm thu", detail: "Bàn giao sản phẩm, họp phản hồi và thống nhất các bước tiếp theo." },
    ],
    priceNote: "Phí dịch vụ xác định theo phạm vi công việc; khách hàng hợp đồng kế toán năm được giảm 10%.",
    priceRows: [
      { label: "Đại diện pháp lý và địa chỉ trụ sở", price: "1.000.000 đ/tháng", note: "Hợp đồng tối thiểu 12 tháng" },
      { label: "Kiểm toán nội bộ theo đợt", price: "Từ 12.000.000 đ/đợt", note: "Tùy quy mô và phạm vi" },
      { label: "Đào tạo kế toán thực hành", price: "3.500.000 đ/khóa", note: "10 buổi, tối đa 8 học viên" },
      { label: "Xây dựng quy chế tài chính", price: "6.000.000 đ/gói", note: "Kèm biểu mẫu áp dụng" },
    ],
    faq: [
      {
        question: "Dịch vụ đại diện pháp lý có hợp pháp không?",
        answer:
          "Có. Doanh nghiệp được ủy quyền cho tổ chức làm đại diện theo pháp luật nếu điều lệ cho phép và người đại diện đáp ứng điều kiện của Luật Doanh nghiệp. Song Hành soạn thảo hồ sơ ủy quyền tương ứng.",
      },
      {
        question: "Có thể kết hợp nhiều dịch vụ trong một hợp đồng không?",
        answer:
          "Có. Khách hàng thường kết hợp kế toán trọn gói với tư vấn thuế và đại diện pháp lý. Chúng tôi gộp phí và áp dụng ưu đãi theo giá trị hợp đồng.",
      },
      {
        question: "Thời gian triển khai kiểm toán nội bộ một đợt là bao lâu?",
        answer:
          "Trung bình 2 đến 4 tuần tùy quy mô, bao gồm khảo sát, kiểm tra chọn mẫu, trao đổi phát hiện và lập báo cáo cuối cùng.",
      },
    ],
  },
];

export const founders = [
  {
    name: "Nguyễn Thu Hà",
    role: "Giám đốc – Thành viên sáng lập",
    credentials: "Thạc sĩ Kế toán, Đại học Kinh tế Quốc dân · Chứng chỉ CPA Việt Nam",
    bio: "Hơn 18 năm làm kế toán và tư vấn thuế cho doanh nghiệp FDI và doanh nghiệp tư nhân. Từng phụ trách tài chính cho hai công ty sản xuất quy mô trên 500 lao động trước khi sáng lập Song Hành.",
    focus: ["Chiến lược dịch vụ", "Tư vấn thuế doanh nghiệp", "Quan hệ khách hàng"],
  },
  {
    name: "Trần Quốc Bảo",
    role: "Phó Giám đốc – Thành viên sáng lập",
    credentials: "Cử nhân Luật Kinh tế, Đại học Luật Hà Nội · Chứng chỉ hành nghề dịch vụ kế toán",
    bio: "Chuyên sâu pháp lý doanh nghiệp, đã trực tiếp xử lý hơn 600 hồ sơ thành lập, thay đổi đăng ký kinh doanh và giải thể. Phụ trách mảng pháp lý và đại diện cho khách hàng tại cơ quan nhà nước.",
    focus: ["Pháp lý doanh nghiệp", "Đăng ký kinh doanh", "Giải thể và tái cấu trúc"],
  },
  {
    name: "Lê Minh Anh",
    role: "Trưởng phòng Kế toán – Thành viên sáng lập",
    credentials: "Thạc sĩ Tài chính, Học viện Tài chính · Chứng chỉ kế toán trưởng",
    bio: "Phụ trách chất lượng dịch vụ kế toán của toàn bộ khách hàng. Xây dựng quy trình soát xét hai lớp và hệ thống lưu trữ chứng từ số hóa mà Song Hành đang áp dụng.",
    focus: ["Chất lượng kế toán", "Soát xét báo cáo", "Đào tạo nội bộ"],
  },
];

export const team = [
  { name: "Phạm Diệu Linh", role: "Kế toán trưởng dịch vụ", tag: "Kế toán", detail: "10 năm kinh nghiệm, phụ trách nhóm 120 doanh nghiệp thương mại và dịch vụ." },
  { name: "Hoàng Văn Nam", role: "Chuyên viên thuế cấp cao", tag: "Thuế", detail: "Xử lý quyết toán, hoàn thuế và hỗ trợ thanh tra thuế cho doanh nghiệp sản xuất." },
  { name: "Đỗ Thị Mai", role: "Chuyên viên pháp lý", tag: "Pháp lý", detail: "Phụ trách hồ sơ thành lập, thay đổi đăng ký và giải thể doanh nghiệp." },
  { name: "Vũ Hải Đăng", role: "Kế toán tổng hợp", tag: "Kế toán", detail: "Chuyên sâu phần mềm kế toán, chuẩn hóa dữ liệu và lập báo cáo quản trị." },
  { name: "Bùi Thanh Tâm", role: "Chuyên viên nhân sự – bảo hiểm", tag: "Nhân sự", detail: "Khai báo lao động, BHXH và tư vấn chính sách tiền lương." },
  { name: "Ngô Quỳnh Trang", role: "Chăm sóc khách hàng", tag: "Hỗ trợ", detail: "Điều phối yêu cầu, theo dõi tiến độ hồ sơ và nhắc lịch nghĩa vụ thuế." },
];

export type Post = {
  slug: string;
  category: "hoat-dong" | "tuyen-dung";
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  author: string;
  readTime: string;
  body: string[];
  bullets?: string[];
};

export const posts: Post[] = [
  {
    slug: "song-hanh-ky-niem-12-nam-thanh-lap",
    category: "hoat-dong",
    title: "Song Hành kỷ niệm 12 năm thành lập và công bố định hướng giai đoạn mới",
    excerpt:
      "Sự kiện có sự tham dự của hơn 150 khách hàng, đối tác và toàn thể cán bộ nhân viên công ty, đánh dấu chặng đường 12 năm đồng hành cùng doanh nghiệp Việt.",
    date: "2026-10-18",
    dateLabel: "18/10/2026",
    author: "Phòng Truyền thông",
    readTime: "4 phút đọc",
    body: [
      "Ngày 18/10/2026, Công ty TNHH Dịch vụ Kế toán Song Hành tổ chức lễ kỷ niệm 12 năm thành lập tại Hà Nội. Sự kiện có sự tham dự của đại diện khách hàng, đối tác ngân hàng, đơn vị cung cấp phần mềm kế toán và toàn thể cán bộ nhân viên.",
      "Phát biểu tại lễ kỷ niệm, bà Nguyễn Thu Hà – Giám đốc công ty – nhấn mạnh định hướng giai đoạn 2026–2030: chuẩn hóa quy trình bằng dữ liệu số, mở rộng dịch vụ tư vấn thuế cho doanh nghiệp vừa và nhỏ, và duy trì tỷ lệ gia hạn hợp đồng trên 95%.",
      "Trong 12 năm hoạt động, Song Hành đã phục vụ hơn 800 doanh nghiệp thuộc các lĩnh vực thương mại, sản xuất, xây dựng, công nghệ và dịch vụ. Công ty hiện có 45 cán bộ, trong đó 12 người có chứng chỉ hành nghề dịch vụ kế toán.",
      "Cũng tại sự kiện, công ty công bố chương trình hỗ trợ 100 doanh nghiệp khởi nghiệp trong năm 2027 với gói kế toán ưu đãi 6 tháng đầu và miễn phí tư vấn thành lập doanh nghiệp.",
    ],
  },
  {
    slug: "cap-nhat-thay-doi-chinh-sach-thue-quy-iv-2026",
    category: "hoat-dong",
    title: "Cập nhật các thay đổi chính sách thuế có hiệu lực từ quý IV/2026",
    excerpt:
      "Tổng hợp những nội dung doanh nghiệp cần lưu ý về hóa đơn điện tử, thuế giá trị gia tăng và mức giảm trừ gia cảnh khi lập tờ khai quý IV.",
    date: "2026-10-06",
    dateLabel: "06/10/2026",
    author: "Phòng Tư vấn thuế",
    readTime: "6 phút đọc",
    body: [
      "Trong quý IV/2026, một số quy định về hóa đơn điện tử và kê khai thuế giá trị gia tăng có điều chỉnh. Doanh nghiệp cần rà soát lại quy trình phát hành hóa đơn và đối chiếu dữ liệu với cơ quan thuế trước khi lập tờ khai.",
      "Thứ nhất, việc sử dụng hóa đơn điện tử khởi tạo từ máy tính tiền được khuyến khích áp dụng với hộ kinh doanh và doanh nghiệp bán lẻ. Dữ liệu hóa đơn cần được đồng bộ với sổ kế toán để tránh chênh lệch khi đối chiếu.",
      "Thứ hai, doanh nghiệp có hoạt động xuất khẩu cần kiểm tra lại hồ sơ chứng minh hàng hóa đã xuất khẩu, đặc biệt với các lô hàng ủy thác, để bảo đảm điều kiện áp dụng thuế suất 0%.",
      "Song Hành khuyến nghị doanh nghiệp thực hiện rà soát nội bộ trước ngày 25 của tháng cuối quý, đối chiếu số liệu hóa đơn với tờ khai và lưu đầy đủ chứng từ thanh toán không dùng tiền mặt.",
    ],
    bullets: [
      "Rà soát đối chiếu hóa đơn điện tử với sổ kế toán trước khi lập tờ khai.",
      "Kiểm tra hồ sơ chứng minh hàng hóa xuất khẩu với các lô ủy thác.",
      "Lưu chứng từ thanh toán không dùng tiền mặt cho giao dịch từ 5 triệu đồng.",
      "Cập nhật mức giảm trừ gia cảnh khi tính thuế thu nhập cá nhân.",
    ],
  },
  {
    slug: "song-hanh-dong-hanh-cung-hoi-ke-toan-viet-nam",
    category: "hoat-dong",
    title: "Song Hành đồng hành cùng Hội Kế toán Việt Nam trong chương trình đào tạo cộng đồng",
    excerpt:
      "Chương trình đào tạo miễn phí dành cho kế toán viên trẻ, tập trung vào thực hành chứng từ và kỹ năng làm việc với cơ quan thuế.",
    date: "2026-09-22",
    dateLabel: "22/09/2026",
    author: "Phòng Truyền thông",
    readTime: "3 phút đọc",
    body: [
      "Song Hành phối hợp cùng Hội Kế toán Việt Nam tổ chức chuỗi đào tạo cộng đồng dành cho kế toán viên có dưới 3 năm kinh nghiệm. Chương trình gồm 6 buổi, kéo dài từ tháng 10 đến tháng 12/2026.",
      "Nội dung tập trung vào kỹ năng thực hành: đọc hiểu chứng từ, hạch toán các nghiệp vụ thường gặp, lập báo cáo tài chính và chuẩn bị hồ sơ giải trình khi cơ quan thuế yêu cầu.",
      "Các chuyên gia của Song Hành trực tiếp đứng lớp, chia sẻ tình huống thực tế từ hồ sơ khách hàng đã được ẩn danh hóa. Học viên hoàn thành chương trình nhận chứng nhận tham gia và tài liệu thực hành.",
      "Đây là hoạt động thường niên của công ty nhằm góp phần nâng cao chất lượng nguồn nhân lực kế toán tại Việt Nam.",
    ],
  },
  {
    slug: "kinh-nghiem-chuan-bi-ho-so-quyet-toan-thue-nam",
    category: "hoat-dong",
    title: "Kinh nghiệm chuẩn bị hồ sơ quyết toán thuế năm, tránh sai sót thường gặp",
    excerpt:
      "Những lỗi phổ biến khi quyết toán thuế thu nhập doanh nghiệp và cách rà soát hồ sơ trước khi nộp, dựa trên kinh nghiệm xử lý hơn 800 hồ sơ của Song Hành.",
    date: "2026-09-08",
    dateLabel: "08/09/2026",
    author: "Phòng Kế toán",
    readTime: "7 phút đọc",
    body: [
      "Quyết toán thuế là đợt rà soát quan trọng nhất trong năm. Phần lớn sai sót không đến từ nghiệp vụ phức tạp mà từ việc bỏ sót chứng từ, hạch toán sai kỳ hoặc chi phí không đủ điều kiện trừ.",
      "Nhóm lỗi thường gặp thứ nhất là chi phí không có hóa đơn hoặc hóa đơn không hợp lệ. Doanh nghiệp cần đối chiếu từng khoản chi lớn với hóa đơn, hợp đồng và chứng từ thanh toán trước khi kê khai.",
      "Nhóm lỗi thứ hai là chênh lệch số liệu giữa báo cáo tài chính và tờ khai thuế. Nguyên nhân thường do điều chỉnh sau khi đã nộp báo cáo nhưng không cập nhật tờ khai tương ứng.",
      "Nhóm lỗi thứ ba là xác định sai thời điểm ghi nhận doanh thu, đặc biệt với hợp đồng dài hạn hoặc thanh toán nhiều đợt. Việc đối chiếu hợp đồng và tiến độ nghiệm thu giúp hạn chế rủi ro này.",
      "Song Hành khuyến nghị doanh nghiệp bắt đầu rà soát từ tháng 11, phân công người chịu trách nhiệm từng phần và lưu bảng đối chiếu có ký xác nhận để thuận tiện khi giải trình.",
    ],
    bullets: [
      "Đối chiếu hóa đơn, hợp đồng và chứng từ thanh toán cho mọi khoản chi lớn.",
      "So khớp báo cáo tài chính với tờ khai thuế sau mỗi lần điều chỉnh.",
      "Kiểm tra thời điểm ghi nhận doanh thu với hợp đồng dài hạn.",
      "Lập bảng đối chiếu có ký xác nhận giữa kế toán và ban lãnh đạo.",
    ],
  },
  {
    slug: "tuyen-dung-ke-toan-tong-hop",
    category: "tuyen-dung",
    title: "Tuyển dụng Kế toán tổng hợp – làm việc tại Hà Nội",
    excerpt:
      "Số lượng 02 người, kinh nghiệm từ 2 năm, phụ trách hạch toán và lập báo cáo cho nhóm khách hàng doanh nghiệp thương mại, dịch vụ.",
    date: "2026-10-20",
    dateLabel: "Hạn nộp: 30/11/2026",
    author: "Phòng Nhân sự",
    readTime: "Tuyển dụng",
    body: [
      "Song Hành tuyển dụng 02 Kế toán tổng hợp làm việc tại văn phòng Hà Nội, phụ trách nhóm khách hàng doanh nghiệp thương mại và dịch vụ.",
      "Mô tả công việc: tiếp nhận và kiểm tra chứng từ, hạch toán vào phần mềm, lập báo cáo thuế tháng/quý, lập báo cáo tài chính năm và phối hợp với kế toán trưởng soát xét số liệu.",
      "Yêu cầu: tốt nghiệp Cao đẳng trở lên chuyên ngành Kế toán, Tài chính; có từ 2 năm kinh nghiệm kế toán tổng hợp; sử dụng thành thạo phần mềm kế toán và Excel; ưu tiên ứng viên có kinh nghiệm dịch vụ kế toán.",
      "Quyền lợi: lương 12 – 18 triệu đồng tùy năng lực, thưởng theo hiệu quả công việc, đóng bảo hiểm đầy đủ, 12 ngày phép năm và hỗ trợ chi phí học chứng chỉ chuyên môn.",
      "Ứng viên gửi hồ sơ về địa chỉ tuyendung@songhanh.vn với tiêu đề [Kế toán tổng hợp] – Họ và tên.",
    ],
    bullets: [
      "Số lượng: 02 người",
      "Kinh nghiệm: từ 2 năm",
      "Mức lương: 12 – 18 triệu đồng",
      "Hạn nộp hồ sơ: 30/11/2026",
    ],
  },
  {
    slug: "tuyen-dung-chuyen-vien-tu-van-thue",
    category: "tuyen-dung",
    title: "Tuyển dụng Chuyên viên Tư vấn thuế – 01 người",
    excerpt:
      "Phụ trách rà soát hồ sơ thuế, tư vấn và đại diện khách hàng làm việc với cơ quan thuế. Yêu cầu từ 3 năm kinh nghiệm.",
    date: "2026-10-12",
    dateLabel: "Hạn nộp: 15/12/2026",
    author: "Phòng Nhân sự",
    readTime: "Tuyển dụng",
    body: [
      "Song Hành tuyển dụng 01 Chuyên viên Tư vấn thuế, làm việc tại Hà Nội, báo cáo trực tiếp Trưởng phòng Tư vấn thuế.",
      "Mô tả công việc: rà soát hồ sơ thuế của khách hàng, lập báo cáo rủi ro, chuẩn bị hồ sơ hoàn thuế và đại diện khách hàng giải trình với cơ quan thuế.",
      "Yêu cầu: tốt nghiệp Đại học chuyên ngành Kế toán, Tài chính, Luật; từ 3 năm kinh nghiệm ở vị trí tư vấn thuế hoặc kế toán thuế; nắm vững Luật Quản lý thuế và các thông tư hướng dẫn; giao tiếp tốt.",
      "Quyền lợi: lương 18 – 25 triệu đồng, thưởng theo dự án, lộ trình lên Trưởng nhóm trong 18 tháng, hỗ trợ chi phí thi chứng chỉ hành nghề.",
      "Ứng viên gửi hồ sơ về tuyendung@songhanh.vn với tiêu đề [Tư vấn thuế] – Họ và tên.",
    ],
    bullets: [
      "Số lượng: 01 người",
      "Kinh nghiệm: từ 3 năm",
      "Mức lương: 18 – 25 triệu đồng",
      "Hạn nộp hồ sơ: 15/12/2026",
    ],
  },
  {
    slug: "tuyen-dung-thuc-tap-sinh-ke-toan",
    category: "tuyen-dung",
    title: "Tuyển thực tập sinh kế toán – chương trình 3 tháng có lương",
    excerpt:
      "Chương trình thực tập dành cho sinh viên năm 3, năm 4, được đào tạo trực tiếp trên chứng từ thực tế và có cơ hội ký hợp đồng chính thức.",
    date: "2026-09-30",
    dateLabel: "Hạn nộp: 31/12/2026",
    author: "Phòng Nhân sự",
    readTime: "Tuyển dụng",
    body: [
      "Song Hành mở chương trình thực tập kế toán 3 tháng dành cho sinh viên năm 3 và năm 4 các trường cao đẳng, đại học khối kinh tế tại Hà Nội.",
      "Thực tập sinh được tham gia xử lý chứng từ thực tế dưới sự hướng dẫn của kế toán phụ trách, làm quen phần mềm kế toán và quy trình báo cáo thuế.",
      "Chương trình có phụ cấp hằng tháng, chứng nhận thực tập và cơ hội được ký hợp đồng chính thức khi tốt nghiệp nếu đạt yêu cầu.",
      "Hồ sơ gồm CV và bảng điểm, gửi về tuyendung@songhanh.vn với tiêu đề [Thực tập kế toán] – Họ và tên – Trường.",
    ],
    bullets: [
      "Đối tượng: sinh viên năm 3, năm 4",
      "Thời gian: 3 tháng, có phụ cấp",
      "Địa điểm: Hà Nội",
      "Hạn nộp hồ sơ: 31/12/2026",
    ],
  },
];

export const categoryLabels = {
  "hoat-dong": "Tin hoạt động",
  "tuyen-dung": "Tin tuyển dụng",
} as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
