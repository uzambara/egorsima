import React from 'react';
import { withPageWrapper } from '../../Hocs/withPageWrapper';
import { ClassNameProps } from '../../Types';
import sharedStyles from '../Pages.scss';
import { ContactItem } from './modules/ContactItem/ContactItem';
import { Icons } from '../../Assets';

type Props = ClassNameProps;

const CONTACTS = [
  {
    label: 'E-mail',
    img: Icons.email,
    contact: '<a target="_blank" href="mailto:egor-sima@gmail.com">egor-sima@gmail.com</a>',
  },
  { label: 'Phone', img: Icons.call, contact: '<a target="_blank"  href="tel:+79630269888">+79630269888</a>' },
  {
    label: 'Whatsapp',
    img: Icons.whatsapp,
    contact: '<a target="_blank" href="https://api.whatsapp.com/send?phone=79630269888">Egor Simonov</a>',
  },
  { label: 'Telegram', img: Icons.telegram, contact: '<a href="https://t.me/egorsima" target="_blank">@egorsima</a>' },
];

function ContactsPageComponent({ className }: Props) {
  return (
    <main className={className}>
      <h2 className={sharedStyles.title}>contacts</h2>
      <table>
        <tbody>
          {CONTACTS.map((props, i) => (
            <ContactItem key={i} {...props} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export const ContactsPage = withPageWrapper(ContactsPageComponent);
