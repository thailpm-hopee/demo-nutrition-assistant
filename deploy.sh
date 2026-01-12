#!/bin/bash

# Kiểm tra xem Vercel CLI có được cài đặt hay không
if ! command -v vercel &> /dev/null
then
    echo "Vercel CLI không được tìm thấy. Vui lòng cài đặt bằng: npm install -g vercel"
    exit
fi

echo "🚀 Bắt đầu quá trình deploy lên Vercel..."

# Chạy lệnh deploy production sử dụng npx để không cần cài vercel global
npx vercel --prod

echo "✅ Quá trình deploy hoàn tất!"
