function get_members() {
  return ['sangumee', 'gumgum', 'bobbob'];
}

members = get_members();

for (i = 0; i < members.length; i++) {
  console.log(members[i].toUpperCase());
}
