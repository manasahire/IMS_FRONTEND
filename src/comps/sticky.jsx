// StickyElementsComponent.jsx
import React from "react";

const StickyElementsComponent = () => {
  return (
    <div
      className="mystickyelements-fixed mystickyelements-position-left mystickyelements-position-screen-center mystickyelements-position-mobile-left mystickyelements-on-click mystickyelements-size-large mystickyelements-mobile-size-medium mystickyelements-entry-effect-slide-in mystickyelements-templates-default entry-effect"
      style={{ transition: "all 0s ease 0s" }}
    >
      <div className="mystickyelement-lists-wrap">
        <ul className="mystickyelements-lists mysticky">
          <li className="mystickyelements-minimize">
            <span
              className="mystickyelements-minimize minimize-position-left minimize-position-mobile-left"
              style={{ background: "#000000" }}
            >
              ←
            </span>
          </li>
          <li
            id="mystickyelements-social-phone"
            className="mystickyelements-social-icon-li mystickyelements-social-phone element-desktop-on element-mobile-on"
            style={{ left: "0px" }}
          >
            <span
              className="mystickyelements-social-icon social-phone social-custom"
              data-tab-setting="click"
              data-click="0"
              data-mobile-behavior="disable"
              data-flyout="disable"
              style={{ background: "#ffdd00" }}
            >
              <a
                href="tel:+919225520000"
                data-url="tel:+919225520000"
                data-tab-setting="click"
                data-mobile-behavior="disable"
                data-flyout="disable"
                title="Phone"
              >
                <i className="fa fa-phone" style={{ color: "#000000" }}></i>
              </a>
            </span>
            <span
              className="mystickyelements-social-text"
              style={{ background: "#ffdd00", color: "#000000" }}
            >
              <a
                href="tel:+919225520000"
                style={{ color: "#000000" }}
                data-tab-setting="click"
                data-flyout="disable"
                title="Phone"
              >
                Phone
              </a>
            </span>
          </li>
          <li
            id="mystickyelements-social-whatsapp"
            className="mystickyelements-social-icon-li mystickyelements-social-whatsapp element-desktop-on element-mobile-on"
            style={{ left: "0px" }}
          >
            <span
              className="mystickyelements-social-icon social-whatsapp social-custom"
              data-tab-setting="click"
              data-click="0"
              data-mobile-behavior="disable"
              data-flyout="disable"
              style={{
                background: "rgb(255, 221, 0)",
                borderBottomRightRadius: "10px",
              }}
            >
              <a
                href="https://web.whatsapp.com/send?phone=+918975766741"
                target="_blank"
                rel="noopener"
                data-url="https://web.whatsapp.com/send?phone=+918975766741"
                data-tab-setting="click"
                data-mobile-behavior="disable"
                data-flyout="disable"
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp" style={{ color: "#000000" }}></i>
              </a>
            </span>
            <span
              className="mystickyelements-social-text"
              style={{ background: "#ffdd00", color: "#000000" }}
            >
              <a
                href="https://web.whatsapp.com/send?phone=+918975766741"
                target="_blank"
                rel="noopener"
                style={{ color: "#000000" }}
                data-tab-setting="click"
                data-flyout="disable"
                title="WhatsApp"
              >
                WhatsApp
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StickyElementsComponent;
