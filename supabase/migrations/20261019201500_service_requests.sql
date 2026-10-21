-- Booking form: Full name, Mobile number, Vehicle type, Tyre size,
-- service, preferred date, notes. Run in the Supabase SQL editor.

create table public.service_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  mobile_number text not null,
  vehicle_type text,
  tyre_size text,
  service text not null default '3D Wheel Alignment',
  preferred_date date,
  notes text,
  created_at timestamptz not null default now(),
  constraint service_requests_full_name_len check (char_length(btrim(full_name)) between 1 and 80),
  constraint service_requests_mobile_number_format check (mobile_number ~ '^[6-9][0-9]{9}$'),
  constraint service_requests_vehicle_type_allowed check (
    vehicle_type is null or vehicle_type in (
      'Hatchback',
      'Sedan',
      'SUV',
      'Luxury Car',
      'Sports Car',
      '4x4 / Off-Road',
      'Electric Vehicle',
      'Commercial Vehicle',
      'Motorcycle / Scooter'
    )
  ),
  constraint service_requests_tyre_size_len check (tyre_size is null or char_length(tyre_size) <= 20),
  constraint service_requests_service_allowed check (
    service in (
      '3D Wheel Alignment',
      'Wheel Balancing',
      'Tyre Changing',
      'Nitrogen Air',
      'Wheel Repair',
      'Alloy Wheel Repair and Throw',
      'Tyres & Tubes'
    )
  ),
  constraint service_requests_notes_len check (notes is null or char_length(notes) <= 500)
);

comment on table public.service_requests is 'WhatsApp booking requests from the contact form.';

create index service_requests_created_at_idx on public.service_requests (created_at desc);
create index service_requests_mobile_number_idx on public.service_requests (mobile_number);

alter table public.service_requests enable row level security;

-- Visitors can submit a request. They cannot read other people's rows.
create policy "Anyone can submit a service request"
  on public.service_requests
  for insert
  to anon, authenticated
  with check (true);

grant insert on table public.service_requests to anon, authenticated;
