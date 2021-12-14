$(document).ready(function () {
    var technicalSkillChange = false

    function showDialog(classValue, msg, delay) {
        $(".notification-fixed-center").removeClass("error success");
        $(".notification-fixed-center").css("display", "block");
        $(".notification-fixed-center").addClass(classValue);
        $(".notification-fixed-center").text(msg);
        $(".notification-fixed-center").fadeOut(delay)
    };$("#btnVerifyBoxTechnicalSkillDetail").click(function (e) {
        e.preventDefault();
        AJS.dialog2("#dialog-processing").show();
        var userName = $("#hdUserName").val(), obj = {employee_id: userName}, $btnVerify = $(this);
        $.ajax({
            url: '/employee/verify-technical-info', type: 'POST', data: obj, success: function (data) {
                console.log(data);
                if (data == 1) {
                    $('#unverified').addClass('hide');
                    $('#verified').removeClass('hide');
                    AJS.dialog2("#dialog-processing").hide();
                    showDialog("success", "Verify skill metric successfully!", 4e3);
                    $btnVerify.remove()
                } else {
                    AJS.dialog2("#dialog-processing").hide();
                    showDialog("error", "Verify skill metric fail!", 4e3)
                }
                ;$(e.currentTarget).hide()
            }, error: function (err) {
                AJS.dialog2("#dialog-processing").hide();
                showDialog("error", "Verify skill metric fail!", 4e3);
                console.log(err)
            }
        })
    });
    $("div").delegate("#btnShowBoxPersonalInfo", "click", function (e) {
        e.preventDefault();
        if ($("#boxPersonInfo").is(":hidden")) {
            $("#boxPersonInfo").slideDown("slow");
            window.location.href = "#boxPersonInfo"
        } else $("#boxPersonInfo").slideUp();
        return false
    });
    $("#btnHideBoxPersonInfo").click(function (e) {
        e.preventDefault();
        $("#boxPersonInfo").slideUp()
    });
    $("div").delegate("#btnShowBoxPersonalInfoDetail", "click", function (e) {
        e.preventDefault();
        $(".show-detail-info").hide();
        $("#btnShowLessPersonInfo").hide();
        $("#btnShowMorePersonInfo").show();
        if ($("#boxPersonInfo").is(":hidden")) {
            $("#boxPersonInfo").slideDown("slow");
            var newSrc = $("#btnShowBoxPersonalInfoImg").attr("src").replace("down.png", "up.png");
            $("#btnShowBoxPersonalInfoImg").attr("src", newSrc);
            window.location.href = "#boxPersonInfo"
        } else {
            var newSrc = $("#btnShowBoxPersonalInfoImg").attr("src").replace("up.png", "down.png");
            $("#btnShowBoxPersonalInfoImg").attr("src", newSrc);
            $("#boxPersonInfo").slideUp()
        }
        ;
        return false
    });
    $("#btnHideBoxPersonInfoDetail").click(function (e) {
        e.preventDefault();
        var newSrc = $("#btnShowBoxPersonalInfoImg").attr("src").replace("up.png", "down.png");
        $("#btnShowBoxPersonalInfoImg").attr("src", newSrc);
        $("#boxPersonInfo").slideUp()
    });
    $("#btnShowMorePersonInfo").click(function (e) {
        e.preventDefault();
        $(".show-detail-info").slideDown();
        $(this).hide();
        $("#btnShowLessPersonInfo").show()
    });
    $("#btnShowLessPersonInfo").click(function (e) {
        e.preventDefault();
        $(".show-detail-info").slideUp();
        $(this).hide();
        $("#btnShowMorePersonInfo").show()
    });
    $("div").delegate("#btnShowBoxCompanyInfo", "click", function (e) {
        e.preventDefault();
        if ($("#boxCompanyInfo").is(":hidden")) {
            $("#boxCompanyInfo").slideDown("slow");
            window.location.href = "#boxCompanyInfo"
        } else $("#boxCompanyInfo").slideUp();
        return false
    });
    $("#btnHideBoxCompanyInfo").click(function (e) {
        e.preventDefault();
        $("#boxCompanyInfo").slideUp()
    });
    $("div").delegate("#btnShowBoxCompanyInfoDetail", "click", function (e) {
        e.preventDefault();
        $(".show-company-info").hide();
        $("#btnShowLessCompanyInfo").hide();
        $("#btnShowMoreCompanyInfo").show();
        if ($("#boxCompanyInfo").is(":hidden")) {
            var newSrc = $("#btnShowBoxCompanyInfoImg").attr("src").replace("down.png", "up.png");
            $("#btnShowBoxCompanyInfoImg").attr("src", newSrc);
            $("#boxCompanyInfo").slideDown("slow");
            window.location.href = "#boxCompanyInfo"
        } else {
            var newSrc = $("#btnShowBoxCompanyInfoImg").attr("src").replace("up.png", "down.png");
            $("#btnShowBoxCompanyInfoImg").attr("src", newSrc);
            $("#boxCompanyInfo").slideUp()
        }
        ;
        return false
    });
    $("#btnHideBoxCompanyInfoDetail").click(function (e) {
        e.preventDefault();
        var newSrc = $("#btnShowBoxCompanyInfoImg").attr("src").replace("up.png", "down.png");
        $("#btnShowBoxCompanyInfoImg").attr("src", newSrc);
        $("#boxCompanyInfo").slideUp()
    });
    $("div").delegate("#btnShowBoxAttritionReason", "click", function (e) {
        e.preventDefault();
        if ($("#boxAttritionReason").is(":hidden")) {
            $("#boxAttritionReason").slideDown("slow");
            window.location.href = "#boxAttritionReason"
        } else $("#boxAttritionReason").slideUp();
        return false
    });
    $("#btnHideBoxAttritionReason").click(function (e) {
        e.preventDefault();
        $("#boxAttritionReason").slideUp()
    });
    $("div").delegate("#btnShowBoxAttritionReasonDetail", "click", function (e) {
        e.preventDefault();
        $(".show-attrition-reason").hide();
        if ($("#boxAttritionReason").is(":hidden")) {
            var newSrc = $("#btnShowBoxAttritionReasonImg").attr("src").replace("down.png", "up.png");
            $("#btnShowBoxAttritionReasonImg").attr("src", newSrc);
            $("#boxAttritionReason").slideDown("slow");
            window.location.href = "#boxAttritionReason"
        } else {
            var newSrc = $("#btnShowBoxAttritionReasonImg").attr("src").replace("up.png", "down.png");
            $("#btnShowBoxAttritionReasonImg").attr("src", newSrc);
            $("#boxAttritionReason").slideUp()
        }
        ;
        return false
    });
    $("#btnHideBoxAttritionReasonDetail").click(function (e) {
        e.preventDefault();
        var newSrc = $("#btnShowBoxAttritionReasonImg").attr("src").replace("up.png", "down.png");
        $("#btnShowBoxAttritionReasonImg").attr("src", newSrc);
        $("#boxAttritionReason").slideUp()
    });
    $("#btnHideBoxInsuranceInfo").click(function (e) {
        e.preventDefault();
        $("#boxInsuranceInfo").slideUp()
    });
    $("div").delegate("#btnShowBoxDependent", "click", function (e) {
        e.preventDefault();
        if ($("#boxDependent").is(":hidden")) {
            $("#boxDependent").slideDown("slow");
            window.location.href = "#boxDependent"
        } else $("#boxDependent").slideUp();
        return false
    });
    $("div").delegate("#btnShowBoxDependentDetail", "click", function (e) {
        e.preventDefault();
        if ($("#boxDependent").is(":hidden")) {
            var newSrc = $("#btnShowBoxDependentImg").attr("src").replace("down.png", "up.png");
            $("#btnShowBoxDependentImg").attr("src", newSrc);
            $("#boxDependent").slideDown("slow");
            window.location.href = "#boxDependent"
        } else {
            var newSrc = $("#btnShowBoxDependentImg").attr("src").replace("up.png", "down.png");
            $("#btnShowBoxDependentImg").attr("src", newSrc);
            $("#boxDependent").slideUp()
        }
        ;
        return false
    });
    $("#btnHideBoxDependentDetail").click(function (e) {
        e.preventDefault();
        var newSrc = $("#btnShowBoxDependentImg").attr("src").replace("up.png", "down.png");
        $("#btnShowBoxDependentImg").attr("src", newSrc);
        $("#boxDependent").slideUp()
    });
    $("#btnShowMoreDependentInfo").click(function (e) {
        e.preventDefault();
        AJS.dialog2("#dependent-dialog").show()
    });
    $("#btn-close-dependent-dialog").click(function (e) {
        e.preventDefault();
        AJS.dialog2("#dependent-dialog").hide()
    });
    $("#btnShowMoreAttritionReasonDetail").click(function (e) {
        e.preventDefault();
        AJS.dialog2("#attrition-reason-dialog").show()
    });
    $("#btn-close-attrition-reason-dialog").click(function (e) {
        e.preventDefault();
        AJS.dialog2("#attrition-reason-dialog").hide()
    });
    $("#btnHideBoxDependent").click(function (e) {
        e.preventDefault();
        $("#boxDependent").slideUp()
    });
    $("div").delegate("#btnShowBoxTechnicalSkill", "click", function (e) {
        e.preventDefault();
        if ($("#boxTechnicalSkill").is(":hidden")) {
            $("#boxTechnicalSkill").slideDown("slow");
            window.location.href = "#boxTechnicalSkill"
        } else $("#boxTechnicalSkill").slideUp();
        return false
    });
    $("#btnHideBoxTechnicalSkill").click(function (e) {
        e.preventDefault();
        $("#boxTechnicalSkill").slideUp()
    });
    $("div").delegate("#btnShowBoxTechnicalSkillDetail", "click", function (e) {
        e.preventDefault();
        if ($("#boxTechnicalSkill").is(":hidden")) {
            var newSrc = $("#btnShowBoxTechnicalSkillImg").attr("src").replace("down.png", "up.png");
            $("#btnShowBoxTechnicalSkillImg").attr("src", newSrc);
            $("#boxTechnicalSkill").slideDown("slow");
            window.location.href = "#boxTechnicalSkill"
        } else {
            var newSrc = $("#btnShowBoxTechnicalSkillImg").attr("src").replace("up.png", "down.png");
            $("#btnShowBoxTechnicalSkillImg").attr("src", newSrc);
            $("#boxTechnicalSkill").slideUp()
        }
        ;
        return false
    });
    $("#btnHideBoxTechnicalSkillDetail").click(function (e) {
        e.preventDefault();
        var newSrc = $("#btnShowBoxTechnicalSkillImg").attr("src").replace("up.png", "down.png");
        $("#btnShowBoxTechnicalSkillImg").attr("src", newSrc);
        $("#boxTechnicalSkill").slideUp()
    });
    $("div").delegate("#btnShowBoxEnglishSkill", "click", function (e) {
        e.preventDefault();
        if ($("#boxEnglishSkill").is(":hidden")) {
            $("#boxEnglishSkill").slideDown("slow");
            window.location.href = "#boxEnglishSkill"
        } else $("#boxEnglishSkill").slideUp();
        return false
    });
    $("#btnHideBoxEnglishSkill").click(function (e) {
        e.preventDefault();
        $("#boxEnglishSkill").slideUp()
    });
    $("div").delegate("#btnShowBoxEnglishSkillDetail", "click", function (e) {
        e.preventDefault();
        if ($("#boxEnglishSkill").is(":hidden")) {
            var newSrc = $("#btnShowBoxEnglishSkillImg").attr("src").replace("down.png", "up.png");
            $("#btnShowBoxEnglishSkillImg").attr("src", newSrc);
            $("#boxEnglishSkill").slideDown("slow");
            window.location.href = "#boxEnglishSkill"
        } else {
            var newSrc = $("#btnShowBoxEnglishSkillImg").attr("src").replace("up.png", "down.png");
            $("#btnShowBoxEnglishSkillImg").attr("src", newSrc);
            $("#boxEnglishSkill").slideUp()
        }
        ;
        return false
    });
    $("#btnHideBoxEnglishSkillDetail").click(function (e) {
        e.preventDefault();
        var newSrc = $("#btnShowBoxEnglishSkillImg").attr("src").replace("up.png", "down.png");
        $("#btnShowBoxEnglishSkillImg").attr("src", newSrc);
        $("#boxEnglishSkill").slideUp()
    });
    $("div").delegate("#btnShowBoxEducation", "click", function (e) {
        e.preventDefault();
        if ($("#boxEducation").is(":hidden")) {
            $("#boxEducation").slideDown("slow");
            window.location.href = "#boxEducation"
        } else $("#boxEducation").slideUp();
        return false
    });
    $("#btnHideBoxEducation").click(function (e) {
        e.preventDefault();
        $("#boxEducation").slideUp()
    });
    $("div").delegate("#btnShowBoxEducationDetail", "click", function (e) {
        e.preventDefault();
        if ($("#boxEducation").is(":hidden")) {
            var newSrc = $("#btnShowBoxEducationImg").attr("src").replace("down.png", "up.png");
            $("#btnShowBoxEducationImg").attr("src", newSrc);
            $("#boxEducation").slideDown("slow");
            window.location.href = "#boxEducation"
        } else {
            var newSrc = $("#btnShowBoxEducationImg").attr("src").replace("up.png", "down.png");
            $("#btnShowBoxEducationImg").attr("src", newSrc);
            $("#boxEducation").slideUp()
        }
        ;
        return false
    });
    $("#btnHideBoxEducationDetail").click(function (e) {
        e.preventDefault();
        var newSrc = $("#btnShowBoxEducationImg").attr("src").replace("up.png", "down.png");
        $("#btnShowBoxEducationImg").attr("src", newSrc);
        $("#boxEducation").slideUp()
    });
    $("div").delegate("#btnShowBoxCourse", "click", function (e) {
        e.preventDefault();
        if ($("#boxCourse").is(":hidden")) {
            $("#boxCourse").slideDown("slow");
            window.location.href = "#boxCourse"
        } else $("#boxCourse").slideUp();
        return false
    });
    $("#btnHideBoxCourse").click(function (e) {
        e.preventDefault();
        $("#boxCourse").slideUp()
    });
    $("div").delegate("#btnShowBoxCourseDetail", "click", function (e) {
        e.preventDefault();
        if ($("#boxCourse").is(":hidden")) {
            var newSrc = $("#btnShowBoxCourseImg").attr("src").replace("down.png", "up.png");
            $("#btnShowBoxCourseImg").attr("src", newSrc);
            $("#boxCourse").slideDown("slow");
            window.location.href = "#boxCourse"
        } else {
            var newSrc = $("#btnShowBoxCourseImg").attr("src").replace("up.png", "down.png");
            $("#btnShowBoxCourseImg").attr("src", newSrc);
            $("#boxCourse").slideUp()
        }
        ;
        return false
    });
    $("#btnHideBoxCourseDetail").click(function (e) {
        e.preventDefault();
        var newSrc = $("#btnShowBoxCourseImg").attr("src").replace("up.png", "down.png");
        $("#btnShowBoxCourseImg").attr("src", newSrc);
        $("#boxCourse").slideUp()
    });
    $("div").delegate("#btnShowBoxHistory", "click", function (e) {
        e.preventDefault();
        if ($("#boxHistory").is(":hidden")) {
            $("#boxHistory").slideDown("slow");
            window.location.href = "#boxHistory"
        } else $("#boxHistory").slideUp();
        return false
    });
    $("#btnHideBoxHistory").click(function (e) {
        e.preventDefault();
        $("#boxHistory").slideUp()
    });
    $("div").delegate("#btnShowBoxNewComerHistory", "click", function (e) {
        e.preventDefault();
        if ($("#boxNewComerHistory").is(":hidden")) {
            $("#boxNewComerHistory").slideDown("slow");
            window.location.href = "#boxHistory"
        } else $("#boxNewComerHistory").slideUp();
        return false
    });
    $("#btnHideBoxNewComerHistory").click(function (e) {
        e.preventDefault();
        $("#boxNewComerHistory").slideUp()
    });
    $("div").delegate("#btnShowBoxHistoryDetail", "click", function (e) {
        e.preventDefault();
        if ($("#boxHistory").is(":hidden")) {
            var newSrc = $("#btnShowBoxHistoryImg").attr("src").replace("down.png", "up.png");
            $("#btnShowBoxHistoryImg").attr("src", newSrc);
            $("#boxHistory").slideDown("slow");
            window.location.href = "#boxHistory"
        } else {
            var newSrc = $("#btnShowBoxHistoryImg").attr("src").replace("up.png", "down.png");
            $("#btnShowBoxHistoryImg").attr("src", newSrc);
            $("#boxHistory").slideUp()
        }
        ;
        return false
    });
    $("#btnHideBoxHistoryDetail").click(function (e) {
        e.preventDefault();
        var newSrc = $("#btnShowBoxHistoryImg").attr("src").replace("up.png", "down.png");
        $("#btnShowBoxHistoryImg").attr("src", newSrc);
        $("#boxHistory").slideUp()
    });
    $("div").delegate("#btnShowBoxAssetDetail", "click", function (e) {
        e.preventDefault();
        if ($("#boxAsset").is(":hidden")) {
            var asset_src = $("#btnShowBoxAssetImg").attr("src").replace("down.png", "up.png");
            $("#btnShowBoxAssetImg").attr("src", asset_src);
            $("#boxAsset").slideDown("slow");
            window.location.href = "#boxAsset"
        } else {
            var asset_src = $("#btnShowBoxAssetImg").attr("src").replace("up.png", "down.png");
            $("#btnShowBoxAssetImg").attr("src", asset_src);
            $("#boxAsset").slideUp()
        }
        ;
        return false
    });
    $("#btnHideBoxAssetDetail").click(function (e) {
        e.preventDefault();
        var newSrc = $("#btnShowBoxHistoryImg").attr("src").replace("up.png", "down.png");
        $("#btnShowBoxHistoryImg").attr("src", newSrc);
        $("#boxAsset").slideUp()
    });
    $("div").delegate("#btnShowBoxFamilyInfo", "click", function (e) {
        e.preventDefault();
        if ($("#boxFamilyInfo").is(":hidden")) {
            $("#boxFamilyInfo").slideDown("slow");
            window.location.href = "#boxFamilyInfo"
        } else $("#boxFamilyInfo").slideUp();
        return false
    });
    $("div").delegate("#btnShowBoxFamilyInfoDetail", "click", function (e) {
        e.preventDefault();
        if ($("#boxFamilyInfo").is(":hidden")) {
            var newSrc = $("#btnShowBoxFamilyInfoImg").attr("src").replace("down.png", "up.png");
            $("#btnShowBoxFamilyInfoImg").attr("src", newSrc);
            $("#boxFamilyInfo").slideDown("slow");
            window.location.href = "#boxFamilyInfo"
        } else {
            var newSrc = $("#btnShowBoxFamilyInfoImg").attr("src").replace("up.png", "down.png");
            $("#btnShowBoxFamilyInfoImg").attr("src", newSrc);
            $("#boxFamilyInfo").slideUp()
        }
        ;
        return false
    });
    $("#btnHideBoxFamilyInfoDetail").click(function (e) {
        e.preventDefault();
        var newSrc = $("#btnShowBoxFamilyInfoImg").attr("src").replace("up.png", "down.png");
        $("#btnShowBoxFamilyInfoImg").attr("src", newSrc);
        $("#boxFamilyInfo").slideUp()
    });
    $("#btn-close-dependent-dialog").click(function (e) {
        e.preventDefault();
        AJS.dialog2("#dependent-dialog").hide()
    });
    $("#btnShowBoxFamilyInfoImg").click(function (e) {
        e.preventDefault();
        $("#boxFamilyInfo").slideUp()
    });
    $("#btnHideBoxFamilyInfo").click(function (e) {
        e.preventDefault();
        $("#boxFamilyInfo").slideUp()
    });
    $("div").delegate("#btnShowInterest", "click", function (e) {
        e.preventDefault();
        if ($("#boxInterest").is(":hidden")) {
            $("#boxInterest").slideDown("slow");
            window.location.href = "#boxInterest"
        } else $("#boxInterest").slideUp();
        return false
    });
    $("#btnHideInterest").click(function (e) {
        e.preventDefault();
        $("#boxInterest").slideUp()
    });
    $("div").delegate("#btnShowInterestDetail", "click", function (e) {
        e.preventDefault();
        if ($("#boxInterest").is(":hidden")) {
            var newSrc = $("#btnShowInterestImg").attr("src").replace("down.png", "up.png");
            $("#btnShowInterestImg").attr("src", newSrc);
            $("#boxInterest").slideDown("slow");
            window.location.href = "#boxInterest"
        } else {
            var newSrc = $("#btnShowInterestImg").attr("src").replace("up.png", "down.png");
            $("#btnShowInterestImg").attr("src", newSrc);
            $("#boxInterest").slideUp()
        }
        ;
        return false
    });
    $("#btnHideInterestDetail").click(function (e) {
        e.preventDefault();
        var newSrc = $("#btnShowInterestImg").attr("src").replace("up.png", "down.png");
        $("#btnShowInterestImg").attr("src", newSrc);
        $("#boxInterest").slideUp()
    });
    $("#btnContactInfo").click(function (e) {
        e.preventDefault();
        if ($("#boxContactInfo").is(":hidden")) {
            $("#boxContactInfo").slideDown("slow")
        } else $("#boxContactInfo").slideUp();
        return false
    });
    $("#btnHideBoxContactInfo").click(function (e) {
        e.preventDefault();
        $("#boxContactInfo").slideUp()
    });
    $("#btnShowMoreCompanyInfo").click(function (e) {
        e.preventDefault();
        $(".show-company-info").slideDown();
        $(this).hide();
        $("#btnShowLessCompanyInfo").show()
    });
    $("#btnShowLessCompanyInfo").click(function (e) {
        e.preventDefault();
        $(".show-company-info").slideUp();
        $(this).hide();
        $("#btnShowMoreCompanyInfo").show()
    })
});
;
