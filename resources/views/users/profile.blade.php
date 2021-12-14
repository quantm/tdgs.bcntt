<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="aui-tabs horizontal-tabs">
                        <ul class="tabs-menu">
                            <li class="menu-item active-tab">
                                <a href="#general_info">Thông tin chung</a>
                            </li>
                            <li class="menu-item">
                                <a href="#family_info">Thông tin gia đình</a>
                            </li>
                            <li class="menu-item">
                                <a href="#work_info">Thông tin nghề nghiệp</a>
                            </li>
                        </ul>
                        <div class="tabs-pane active-pane" id="general_info">
                            <div class="custom-main-content">
                                <form id="boxPersonInfoForm" class="aui">
                                    <div id="boxPersonInfo" class="custom-large-control-form">
                                        <div class="form-group">
                                            <label class="custom-alias-name">Hình ảnh nhận diện</label>
                                           <input type="file" id="user_profile_image" class="custom-form-control input-width-medium">
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Họ Tên <span
                                                    class="red-color-default"> *</span>
                                            <input id="user_profile_name"
                                                   class="tooltip custom-form-control input-width-medium"
                                                   type="text"
                                                   required
                                                   value="{{ Auth::user()->name }}"
                                                   maxlength="50">
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Tên gọi thân mật / tên thường gọi</label>
                                            <input id="user_profile_ten_goi_than_mat"
                                                   class="tooltip custom-form-control input-width-medium"
                                                   type="text"
                                                   maxlength="50">
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Thánh danh
                                            <input id="user_profile_thanh_danh"
                                                   class="tooltip custom-form-control input-width-medium"
                                                   type="text"
                                                   maxlength="50">
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Giới tính (Nam/Nữ) <span
                                                    class="red-color-default"> *</span><br>
                                            <input class="radio" value="0" id="idMale_detail" type="radio" name="gender_detail" checked="">
                                            <label for="idMale_detail">Nam</label>
                                            <input class="radio" value="1" id="idFemale_detail" type="radio" name="gender_detail">
                                            <label for="idFemale_detail">Nữ</label>
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Ngày/tháng/năm sinh <span
                                                    class="red-color-default"> *</span></label>
                                            <input required class="aui-date-picker custom-form-control input-width-medium" id="user_profile_birthday" type="date" max="" min="" />
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Nguyên quán<span
                                                    class="red-color-default"> *</span>
                                            <input id="user_profile_nguyen_quan"
                                                   class="tooltip custom-form-control input-width-medium"
                                                   type="text"
                                                   maxlength="50">
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Quốc tịch<span
                                                    class="red-color-default"> *</span>
                                            <input id="user_profile_quoc_tich"
                                                   class="tooltip custom-form-control input-width-medium"
                                                   type="text"
                                                   maxlength="50">
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Địa chỉ tạm trú
                                            <input id="user_profile_tam_tru"
                                                   class="tooltip custom-form-control input-width-medium"
                                                   type="text"
                                                   maxlength="50">
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Địa chỉ thường trú / Địa chỉ liên lạc <span
                                                    class="red-color-default"> *</span>
                                            <input id="user_profile_thuong_tru"
                                                   class="tooltip custom-form-control input-width-medium"
                                                   type="text"
                                                   maxlength="50">
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">CMND/nơi cấp/ngày cấp <span
                                                    class="red-color-default"> *</span>
                                            <input id="user_profile_cmnd"
                                                   class="tooltip custom-form-control input-width-medium"
                                                   type="text"
                                                   maxlength="50">
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">CMND/nơi cấp/ngày cấp <span
                                                    class="red-color-default"> *</span>
                                                <input id="user_profile_cccd"
                                                       class="tooltip custom-form-control input-width-medium"
                                                       type="text"
                                                       maxlength="50">
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Số điện thoại liên lạc <span
                                                    class="red-color-default"> *</span>
                                                <input id="user_profile_phone_number"
                                                       class="tooltip custom-form-control input-width-medium"
                                                       type="number"
                                                       required
                                                >
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Email liên lạc <span
                                                    class="red-color-default"> *</span>
                                                <input id="user_profile_phone_number"
                                                       class="tooltip custom-form-control input-width-medium"
                                                       type="email"
                                                       required
                                                >
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Zalo <span
                                                    class="red-color-default"> *</span>
                                                <input id="user_profile_zalo"
                                                       class="tooltip custom-form-control input-width-medium"
                                                       type="email"
                                                       required
                                                >
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Facebook <span
                                                    class="red-color-default"> *</span>
                                                <input id="user_profile_facebook"
                                                       class="tooltip custom-form-control input-width-medium"
                                                       type="email"
                                                       required
                                                >
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Nếu không liên lạc được với bạn, <br> thì sẽ liên lạc với ai để tìm bạn? (Tên, số điện thoại) <span
                                                    class="red-color-default"> *</span>
                                                <input id="user_profile_find_contact"
                                                       class="tooltip custom-form-control input-width-medium"
                                                       type="text"
                                                       required
                                                >
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Tình trạng sinh hoạt TĐGS
                                                <span
                                                    class="red-color-default"> *</span>
                                            <form class="aui">
                                                <select id="user_profile_tdgs" class="custom-form-control input-width-medium">
                                                    <option value="1">Đang sinh hoạt bình thường</option>
                                                    <option value="2">Đã lâu không sinh hoạt</option>
                                                    <option value="3">Không còn sinh hoạt nữa</option>
                                                    <option value="4">Không rõ</option>
                                                </select>
                                            </form>
                                            </label>
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Trạng thái
                                                <span
                                                    class="red-color-default"> *</span>
                                                <form>
                                                    <select id="user_profile_status" onchange="set_show_date()" class="custom-form-control input-width-medium">
                                                        <option value="active">Còn sống</option>
                                                        <option value="in_active">Đã mất</option>
                                                    </select>
                                                </form>
                                            </label>
                                            <script>
                                                function set_show_date() {
                                                    const x = document.getElementById("user_profile_status").value;
                                                    if(x === 'in_active') {
                                                        document.getElementById('user_profile_date_loss_form').style.display='block';
                                                    }
                                                    else {
                                                        document.getElementById('user_profile_date_loss_form').style.display='none';
                                                    }
                                                }
                                            </script>
                                        </div>
                                        <div class="form-group" style="display: none" id="user_profile_date_loss_form">
                                            <label class="custom-alias-name">Ngày mất <span
                                                    class="red-color-default"> *</span></label>
                                            <input class="aui-date-picker custom-form-control input-width-medium" id="user_profile_date_loss" type="date" max="" min="" />
                                        </div>
                                        <div class="form-group">
                                            <button id="btnUpdatePersonalInfo" type="submit"
                                                    class="aui-button aui-button-primary">Lưu
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="tabs-pane" id="family_info">
                            <div class="custom-main-content">
                                <form id="boxPersonInfoForm" class="aui">
                                    <div id="boxPersonInfo" class="custom-large-control-form">
                                        <div class="form-group">
                                            <label class="custom-alias-name">Họ Tên</label>
                                            <input id="personal_name"
                                                   class="tooltip custom-form-control input-width-medium"
                                                   type="text"
                                                   value="{{ Auth::user()->name }}"
                                                   maxlength="50">
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Năm sinh</label>
                                            <input id="date-of-birth"
                                                   class="tooltip  custom-form-control input-width-medium"
                                                   type="text" value="" maxlength="100">
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Địa chỉ<span
                                                    class="red-color-default"> *</span></label>
                                            <textarea id="address_detail" maxlength="255"
                                                      class="tooltip custom-form-control input-width-medium"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <button id="btnUpdatePersonalInfo" type="button"
                                                    class="aui-button aui-button-primary">Lưu
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="tabs-pane" id="work_info">
                            <div class="custom-main-content">
                                <form id="boxPersonInfoForm" class="aui">
                                    <div id="boxPersonInfo" class="custom-large-control-form">
                                        <div class="form-group">
                                            <label class="custom-alias-name">Họ Tên</label>
                                            <input id="personal_name"
                                                   class="tooltip custom-form-control input-width-medium"
                                                   type="text"
                                                   value="{{ Auth::user()->name }}"
                                                   maxlength="50">
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Năm sinh</label>
                                            <input id="date-of-birth"
                                                   class="tooltip  custom-form-control input-width-medium"
                                                   type="text" value="" maxlength="100">
                                        </div>
                                        <div class="form-group">
                                            <label class="custom-alias-name">Địa chỉ<span
                                                    class="red-color-default"> *</span></label>
                                            <textarea id="address_detail" maxlength="255"
                                                      class="tooltip custom-form-control input-width-medium"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <button id="btnUpdatePersonalInfo" type="button"
                                                    class="aui-button aui-button-primary">Lưu
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
