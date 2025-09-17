// script.js
// Danh sách 18 tài khoản + ánh xạ username -> file HTML riêng
const accounts = [
  { username: "Ngọc Bảo",  password: "1208",  page: "ngocbao.html"  },
  { username: "Trang Linh",  password: "2411",  page: "tranglinh.html"  },
  { username: "Vân Anh",  password: "0707",  page: "vananh.html"  },
  { username: "Thu Trang",  password: "1409",  page: "thutrang.html"  },
  { username: "Ngọc Hà",  password: "2704",  page: "ngha.html"  },
  { username: "Hồng Anh",  password: "1707",  page: "honganh.html"  },
  { username: "Thanh Lam",  password: "1112",  page: "thanhlam.html"  },
  { username: "Hà Chi",  password: "0412",  page: "hachi.html"  },
  { username: "Mai Anh",  password: "2009",  page: "maianh.html"  },
  { username: "Hà Linh", password: "0101", page: "vhalinh.html" },
  { username: "Hà Linh", password: "0505", page: "dhalinh.html" },
  { username: "Hải Yến", password: "2302", page: "haiyen.html" },
  { username: "Anh Thư", password: "0812", page: "anhthu.html" },
  { username: "Lê Na", password: "0310", page: "lena.html" },
  { username: "Thảo My", password: "0304", page: "thaomy.html" },
  { username: "Huyền Trâm", password: "1001", page: "huyentram.html" },
  { username: "Hà Vy", password: "2609", page: "havy.html" },
  { username: "Mai Ân", password: "0308", page: "maian.html" },
  { username: "Quỳnh Liên", password: "0701", page: "quynhlien.html" }
];

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const u = document.getElementById('username').value.trim();
    const p = document.getElementById('password').value;

    if (!u || !p) {
      alert('Vui lòng nhập cả tên đăng nhập và mật khẩu.');
      return;
    }

    const acc = accounts.find(a => a.username === u && a.password === p);

    if (acc) {
      // lưu currentUser để các homeX.html có thể lấy (nếu cần)
      localStorage.setItem('currentUser', acc.username);
      // chuyển tới trang tương ứng
      window.location.href = acc.page;
    } else {
      alert('Sai tài khoản hoặc mật khẩu!');
    }
  });
});

// hàm dùng chung cho các trang homeX để show user & logout
function showCurrentUserOrBackToLogin() {
  const el = document.getElementById('currentUserName');
  const user = localStorage.getItem('currentUser');
  if (!user) {
    // chưa login => quay lại trang login
    window.location.href = 'index.html';
    return;
  }
  if (el) el.textContent = user;
}
function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'fake.html';
}
