import React from 'react'

export default function Member() {
  return (
<div>

    <body>
    
    <div class="container mt-3">
      <h2>Member Table</h2>
      <p>รายชื่อลูกค้าVIP</p>            
      <table class="table table-striped">
        <thead>
          <tr>
          <th>Picture</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td><img src="./images/31.jpg" width={"50"}/></td>
            <td>หลี่ซู</td>
            <td>สุดสวย</td>
            <td>หลี่ซู11@gmail.com</td>
            <td><button type="button" class="btn btn-success">Read more</button></td>
          </tr>
          <tr>
          <td><img src="./images/32.jpg" width={"50"}/></td>
            <td>ฉวน ฉวน</td>
            <td>น่ารักจัง</td>
            <td>ฉวน12@gmail.com</td>
            <td><button type="button" class="btn btn-success">Read more</button></td>
          </tr>
          <tr>
          <td><img src="./images/33.jpg" width={"50"}/></td>
            <td>เสี่ยวเปา</td>
            <td>เท่ดีจัง</td>
            <td>เสี่ยวเปา13@gmail.com</td>
            <td><button type="button" class="btn btn-success">Read more</button></td>
          </tr>
          <tr>
          <td><img src="./images/34.jpg" width={"50"}/></td>
            <td>ดูชิก</td>
            <td>นะคะ</td>
            <td>ดูชิก14@gmail.com</td>
            <td><button type="button" class="btn btn-success">Read more</button></td>
          </tr>
          <tr>
          <td><img src="./images/35.jpg" width={"50"}/></td>
            <td>หมิ่นหุ้ย</td>
            <td>นุ่มนุิ่ม</td>
            <td>หมิ่นหุ้ย15@gmail.com</td>
            <td><button type="button" class="btn btn-success">Read more</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    </body>
    </div>
  )
  }