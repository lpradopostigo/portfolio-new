import React, { useRef, useEffect } from "react";
import {
  HiddenSelect,
  useSelect,
  DismissButton,
  useOverlay,
  FocusScope,
  useListBox,
  useOption,
} from "react-aria";
import { Item, useSelectState } from "react-stately";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { When } from "react-if";

export default function LocaleSelector(props) {
  const { i18n } = useTranslation();
  const state = useSelectState({
    ...props,
    children: [<Item>en</Item>, <Item>es</Item>],
    onSelectionChange: (key) => {
      const elements = [...state.collection];
      const locale = elements.find((elem) => elem.key === key)?.props?.children;
      i18n.changeLanguage(locale);
    },
  });
  const ref = useRef();
  const { triggerProps, valueProps, menuProps } = useSelect(props, state, ref);

  useEffect(() => {
    const elements = [...state.collection];
    const key = elements.find(
      (elem) => elem.props.children === i18n.language
    )?.key;
    state.setSelectedKey(key);
  }, [i18n.language]);

  return (
    <div className="relative inline-block">
      <HiddenSelect state={state} triggerRef={ref} />
      <Button {...triggerProps} ref={ref}>
        <span {...valueProps} className="font-sans">
          {state.selectedItem?.rendered}
        </span>
      </Button>

      <When condition={state.isOpen}>
        <Popover isOpen={state.isOpen} onClose={state.close}>
          <ListBox {...menuProps} state={state} />
        </Popover>
      </When>
    </div>
  );
}

function Popover(props) {
  const ref = useRef();
  const { popoverRef = ref, isOpen, onClose, children } = props;
  const { overlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      shouldCloseOnBlur: true,
      isDismissable: true,
    },
    popoverRef
  );

  return (
    <FocusScope restoreFocus>
      <div {...overlayProps} ref={popoverRef} className="absolute mt-1">
        {children}
        <DismissButton onDismiss={onClose} />
      </div>
    </FocusScope>
  );
}

function ListBox(props) {
  const ref = React.useRef();
  const { listBoxRef = ref, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      className="overflow-hidden bg-white rounded shadow-md"
    >
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
}

function Option({ item, state }) {
  const ref = React.useRef();
  const { optionProps, isSelected, isFocused } = useOption(
    { key: item.key },
    state,
    ref
  );

  return (
    <li
      {...optionProps}
      ref={ref}
      className={clsx("focus:outline-none py-1.5 px-3", {
        "bg-teal": isSelected,
      })}
    >
      {item.rendered}
    </li>
  );
}
