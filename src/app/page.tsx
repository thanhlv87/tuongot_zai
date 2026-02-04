'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Flame, 
  Heart, 
  ShieldCheck, 
  Truck, 
  Phone, 
  MapPin,
  CheckCircle2,
  Package,
  ShoppingBag
} from 'lucide-react'

export default function Home() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const zaloNumber = '0982722036'
  const zaloUrl = `https://zalo.me/${zaloNumber}`

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-50/30 via-white to-orange-50/20">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Flame className="h-8 w-8 text-orange-600" />
              <span className="text-xl font-bold text-orange-700">Tương Ớt Hương Việt</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Button 
                variant="ghost" 
                onClick={scrollToProducts}
                className="text-gray-700 hover:text-orange-600"
              >
                Sản Phẩm
              </Button>
              <Button 
                variant="ghost" 
                onClick={scrollToContact}
                className="text-gray-700 hover:text-orange-600"
              >
                Liên Hệ
              </Button>
            </nav>
            <Button 
              onClick={scrollToProducts}
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              Mua Ngay
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <Badge className="bg-orange-100 text-orange-700 border-orange-300 text-sm px-4 py-1">
                🌶️ Sản phẩm 100% tự nhiên
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tương Ớt{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Thuần Khiết
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                Khỏe mạnh - Tự nhiên - An toàn
              </p>
              <p className="text-base text-gray-500 max-w-lg mx-auto lg:mx-0">
                Tương ớt được làm từ nguyên liệu tươi ngon, không tỏi, không cà chua, 
                không chất bảo quản. Giữ trọn hương vị tự nhiên và an toàn cho sức khỏe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button 
                  onClick={scrollToProducts}
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-lg px-8 py-6 rounded-full"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Đặt Mua Ngay
                </Button>
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 rounded-full"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Liên Hệ Zalo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-orange-200/50">
                <img
                  src="/images/chili-hero.png"
                  alt="Tương ớt Hương Việt"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Đặc Điểm Nổi Bật
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tương ớt của chúng tôi cam kết mang đến sản phẩm chất lượng và an toàn nhất
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/50 group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Không Chất Bảo Quản
                </h3>
                <p className="text-gray-600">
                  Sản phẩm hoàn toàn tự nhiên, không sử dụng bất kỳ chất bảo quản nào, 
                  an toàn tuyệt đối cho sức khỏe.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/50 group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Không Tỏi - Không Cà Chua
                </h3>
                <p className="text-gray-600">
                  Công thức độc đáo từ ớt tươi, không tỏi và không cà chua, 
                  phù hợp cho cả người nhạy cảm.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/50 group sm:col-span-2 lg:col-span-1">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Flame className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  100% Nguyên Liệu Tươi
                </h3>
                <p className="text-gray-600">
                  Ớt tươi được tuyển chọn kỹ càng, giữ nguyên hương vị tự nhiên, 
                  không qua bất kỳ quá trình chế biến hóa học nào.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ingredients Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/chili-ingredients.png"
                  alt="Nguyên liệu tương ớt"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 text-white order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Nguyên Liệu Tự Nhiên
              </h2>
              <p className="text-lg text-orange-100">
                Chúng tôi tin rằng hương vị đích thực đến từ nguyên liệu tươi ngon và quá trình chế biến thủ công tỉ mỉ.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-orange-200 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Ớt tươi nguyên chất</p>
                    <p className="text-orange-100 text-sm">Được thu hoạch vào mùa ớt tươi ngon nhất</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-orange-200 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Quy trình thủ công</p>
                    <p className="text-orange-100 text-sm">Giữ nguyên hương vị và chất dinh dưỡng</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-orange-200 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">An toàn cho sức khỏe</p>
                    <p className="text-orange-100 text-sm">Không hóa chất, không chất phụ gia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-700 border-orange-300 mb-4">
              <Package className="mr-1 h-4 w-4" />
              Sản Phẩm
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Chọn Gói Phù Hợp
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cung cấp 2 kích thước để phục vụ mọi nhu cầu của bạn
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Product 1 - 350ml */}
            <Card className="border-2 border-gray-200 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-100/70 overflow-hidden">
              <div className="bg-gradient-to-br from-gray-50 to-orange-50 p-6">
                <div className="aspect-square max-w-[200px] mx-auto mb-4">
                  <img
                    src="/images/chili-products.png"
                    alt="Tương ớt 350ml"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <Badge className="bg-orange-100 text-orange-700 mb-3">Phổ thông</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">350ml</h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-4xl font-bold text-orange-600">35,000</span>
                  <span className="text-gray-600">đ</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Phù hợp cho gia đình, sử dụng hàng ngày
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  onClick={() => window.open(zaloUrl, '_blank')}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Đặt Mua Qua Zalo
                </Button>
              </CardFooter>
            </Card>

            {/* Product 2 - 500ml */}
            <Card className="border-2 border-orange-400 relative hover:shadow-2xl hover:shadow-orange-200/70 transition-all duration-300 overflow-hidden">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Phổ biến
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6">
                <div className="aspect-square max-w-[200px] mx-auto mb-4">
                  <img
                    src="/images/chili-products.png"
                    alt="Tương ớt 500ml"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <Badge className="bg-orange-600 text-white mb-3">Khuyên dùng</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">500ml</h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-4xl font-bold text-orange-600">50,000</span>
                  <span className="text-gray-600">đ</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Tiết kiệm hơn, phù hợp cho cả nhà và nhậu nhẹt
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  onClick={() => window.open(zaloUrl, '_blank')}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-lg py-6"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Đặt Mua Qua Zalo
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Wholesale Banner */}
          <Card className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200">
            <CardContent className="p-8 text-center">
              <Truck className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Mua Sỉ - Giá Tốt Hơn
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Bạn là cửa hàng, quán ăn, nhà hàng? Liên hệ với chúng tôi để nhận giá ưu đãi 
                và chiết khấu hấp dẫn cho đơn hàng số lượng lớn.
              </p>
              <Button 
                onClick={() => window.open(zaloUrl, '_blank')}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 rounded-full"
              >
                <Phone className="mr-2 h-5 w-5" />
                Liên Hệ Mua Sỉ
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Liên Hệ Với Chúng Tôi
              </h2>
              <p className="text-lg text-gray-600">
                Hãy liên hệ ngay để được tư vấn và đặt hàng
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Address Card */}
              <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-7 w-7 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Địa Chỉ
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Số 8, Ngõ 135 Núi Trúc<br />
                        Phường Giảng Võ<br />
                        Quận Ba Đình<br />
                        Hà Nội
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Zalo Card */}
              <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-7 w-7 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Zalo
                      </h3>
                      <p className="text-gray-600 mb-3">
                        Hotline: 0982 722 036
                      </p>
                      <Button 
                        onClick={() => window.open(zaloUrl, '_blank')}
                        className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
                      >
                        Chat Zalo Ngay
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-gradient-to-br from-orange-50 via-white to-red-50 border-2 border-orange-200">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-full mb-4">
                  <Heart className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Cảm ơn Quý Khách!
                </h3>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Chúng tôi rất hân hạnh được phục vụ. Sự hài lòng của quý khách là động lực 
                  để chúng tôi không ngừng hoàn thiện và mang đến những sản phẩm tốt nhất.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gradient-to-r from-gray-900 via-orange-900 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame className="h-8 w-8 text-orange-400" />
                <span className="text-xl font-bold">Tương Ớt Hương Việt</span>
              </div>
              <p className="text-gray-300 text-sm">
                Sản phẩm tương ớt tự nhiên, không chất bảo quản, không tỏi, không cà chua. 
                Hương vị đích thực, an toàn cho sức khỏe.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-orange-400">Thông Tin</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Địa chỉ: Số 8, Ngõ 135 Núi Trúc, Giảng Võ, Hà Nội</li>
                <li>Hotline: 0982 722 036</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-orange-400">Hỗ Trợ</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Mua lẻ: Gọi Zalo 0982 722 036</li>
                <li>• Mua sỉ: Liên hệ để nhận giá tốt</li>
                <li>• Giao hàng tận nơi tại Hà Nội</li>
              </ul>
            </div>
          </div>
          <Separator className="bg-orange-800/50 mb-6" />
          <div className="text-center text-gray-400 text-sm">
            <p>© 2024 Tương Ớt Hương Việt. All rights reserved.</p>
            <p className="mt-2">Sản phẩm 100% tự nhiên - Sức khỏe của bạn là ưu tiên của chúng tôi</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
